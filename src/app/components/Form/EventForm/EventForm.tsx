import { Grid } from '@mui/material';
import { useZodForm } from '@app/hooks/form';
import { eventSchema, type EventFormData } from '@app/schemas/forms';
import { FormWrapper, FormInput, FormSelect, FormDatePicker } from '@app/components/Form';
import { LocationSection } from './LocationSection';
import { CapacitySection } from './CapacitySection';
import { RequirementsSection } from './RequirementsSection';
import { RegistrationSection } from './RegistrationSection';
import { SafetySection } from './SafetySection';

interface EventFormProps {
  initialData?: Partial<EventFormData>;
  onSubmit: (data: EventFormData) => void;
}

const EVENT_TYPES = [
  { value: 'workshop', label: 'Workshop' },
  { value: 'fundraiser', label: 'Fundraiser' },
  { value: 'volunteer', label: 'Volunteer Event' },
  { value: 'awareness', label: 'Awareness Campaign' },
  { value: 'other', label: 'Other' },
];

export const EventForm = ({ initialData, onSubmit }: EventFormProps) => {
  const methods = useZodForm({
    schema: eventSchema,
    defaultValues: {
      title: '',
      type: 'volunteer',
      datetime: {
        date: new Date(),
        startTime: '',
        endTime: '',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      location: {
        type: 'physical',
        address: '',
        virtualLink: '',
        instructions: '',
      },
      capacity: {
        minimum: 1,
        maximum: 10,
      },
      requirements: {
        skills: [],
        equipment: [],
        age: 18,
        experience: '',
      },
      description: '',
      registration: {
        deadline: new Date(),
        fee: 0,
        refundPolicy: '',
      },
      safety: [],
      ...initialData,
    },
  });

  return (
    <FormWrapper methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        {/* Basic Information */}
        <Grid item xs={12} md={6}>
          <FormInput name="title" label="Event Title" required />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormSelect
            name="type"
            label="Event Type"
            options={EVENT_TYPES}
            required
          />
        </Grid>

        {/* Date and Time */}
        <Grid item xs={12} md={4}>
          <FormDatePicker name="datetime.date" label="Event Date" />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormInput
            name="datetime.startTime"
            label="Start Time"
            type="time"
            required
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormInput
            name="datetime.endTime"
            label="End Time"
            type="time"
            required
          />
        </Grid>

        {/* Location */}
        <Grid item xs={12}>
          <LocationSection />
        </Grid>

        {/* Capacity */}
        <Grid item xs={12}>
          <CapacitySection />
        </Grid>

        {/* Requirements */}
        <Grid item xs={12}>
          <RequirementsSection />
        </Grid>

        {/* Description */}
        <Grid item xs={12}>
          <FormInput
            name="description"
            label="Event Description"
            multiline
            rows={4}
            required
          />
        </Grid>

        {/* Registration */}
        <Grid item xs={12}>
          <RegistrationSection />
        </Grid>

        {/* Safety Guidelines */}
        <Grid item xs={12}>
          <SafetySection />
        </Grid>
      </Grid>
    </FormWrapper>
  );
};