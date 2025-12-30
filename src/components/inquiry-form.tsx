'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { submitInquiry } from '@/app/actions';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const inquirySchema = z.object({
  name: z.string().min(2, { message: 'Namn måste vara minst 2 tecken.' }),
  email: z.string().email({ message: 'Vänligen ange en giltig e-postadress.' }),
  phone: z.string().optional(),
  service: z.string().trim().min(1, { message: "Vänligen välj en tjänst." }),
  message: z.string().min(10, { message: 'Meddelande måste vara minst 10 tecken.' }),
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

export function InquiryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      service: undefined,
    },
  });

  async function onSubmit(values: InquiryFormValues) {
    const result = await submitInquiry(values);
    if (result.success) {
      toast.success('Förfrågan skickad!', {
        description: result.message,
      });
      reset();
    } else {
      toast.error('Ett fel uppstod', {
        description: result.message,
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Namn</Label>
        <Input id="name" placeholder="Ditt namn" {...register('name')} />
        {errors.name && <p className="text-sm font-medium text-destructive">{errors.name.message}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">E-post</Label>
          <Input id="email" placeholder="din.email@exempel.com" {...register('email')} />
          {errors.email && <p className="text-sm font-medium text-destructive">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Telefon (valfritt)</Label>
          <Input id="phone" placeholder="Ditt telefonnummer" {...register('phone')} />
          {errors.phone && <p className="text-sm font-medium text-destructive">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label>Tjänst</Label>
        <Controller
          control={control}
          name="service"
          render={({ field }) => (
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Välj en tjänst" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Flyttstädning">Flyttstädning</SelectItem>
                <SelectItem value="Hemstädning">Hemstädning</SelectItem>
                <SelectItem value="Kontorstädning">Kontorstädning</SelectItem>
                <SelectItem value="Lokalstädning">Lokalstädning</SelectItem>
                <SelectItem value="Storstädning">Storstädning</SelectItem>
                <SelectItem value="Tvätt och Vikning">Tvätt och Vikning</SelectItem>
                <SelectItem value="Annat">Annat</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.service && <p className="text-sm font-medium text-destructive">{errors.service.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Meddelande</Label>
        <Textarea
          id="message"
          placeholder="Berätta lite om vad du behöver hjälp med..."
          className="min-h-[120px]"
          {...register('message')}
        />
        {errors.message && <p className="text-sm font-medium text-destructive">{errors.message.message}</p>}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Skicka förfrågan
      </Button>
    </form>
  );
}