'use client';

import React from 'react';
import { toast, Toaster } from 'sonner';

export default function PromiseToast() {
  return (
    <div className='flex items-center justify-center w-full h-screen'>
      <button
        className="toast-button bg-green-700 px-6 py-3 rounded-sm"
        onClick={() => {
          const myPromise = new Promise<{ name: string }>((resolve) => {
            setTimeout(() => {
              resolve({ name: 'Proposal' });
            }, 3000);
          });

          toast.promise(myPromise, {
            loading: 'Loading...',
            success: (data: { name: string }) => {
              return `${data.name} sent successfully`;
            },
            error: 'Error',
          });
        }}
      >
        Submit
        <Toaster position='bottom-right' expand={true} richColors />
      </button>
    </div>

  );
}