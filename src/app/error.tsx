'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset?: () => void;
}) {
  return (
    <div>
      <h2 className="error">Something went wrong! Try refreshing the page</h2>
    </div>
  );
}
