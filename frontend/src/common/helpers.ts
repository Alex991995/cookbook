export function setActive({ isActive }: { isActive: boolean }) {
  if (isActive) {
    return 'border-b-2  border-primary font-semibold text-black';
  }
  return '';
}
