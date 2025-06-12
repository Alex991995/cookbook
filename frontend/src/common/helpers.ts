export function setActive({ isActive }: { isActive: boolean }) {
  if (isActive) {
    return 'border-b-2  border-primary font-semibold text-black';
  }
  return '';
}

export function getWhenCreatedInMinutes(createdAt?: string) {
  if (createdAt) {
    const date = new Date(createdAt).getTime();
    const createdTime = Date.now() - date;
    return new Date(createdTime).getMinutes();
  }
  return 0;
}
