"use client";

import { Terminal } from 'lucide-react';

export default function DevMode() {
    return (
        // biome-ignore lint/a11y/useButtonType: <explanation>
        <button className='flex items-center rounded border p-2 hover:bg-gray-200'>
            <Terminal className='mr-2 size-4' />
            <p className='font-sans font-sm text-black'>Dev mode</p>
        </button>
    );
}