'use client'
import React from 'react';
import { HeroUIProvider } from '@heroui/react';
import NextTopLoader from 'nextjs-toploader';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import PageLoaderWrapper from './PageLoaderWrapper';

interface ProvidersProps {
    children: React.ReactNode;
}

export function AppProviders({ children }: ProvidersProps) {
    return (
        <>
            <PageLoaderWrapper>
                <HeroUIProvider>
                    <NextTopLoader
                        color="#f7941d"
                    // showSpinner={false}
                    />
                    {children}
                </HeroUIProvider>
            </PageLoaderWrapper>
        </>
    );
}