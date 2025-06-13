export function setActive({ isActive }: { isActive: boolean }) {
  if (isActive) {
    return 'border-b-2  border-primary font-semibold text-black';
  }
  return '';
}

export function getWhenCreatedInMinutes(createdAt?: string) {
  if (createdAt) {
    const date = new Date(createdAt).getTime();
    const timeDifferenceMs = Date.now() - date;
    return Math.floor(timeDifferenceMs / (1000 * 60));
  }
  return 0;
}

export function convertMinutesToHours(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return { hours, remainingMinutes };
}
