'use client';
import { useEffect, useState } from 'react';
import ImageComponent from '../ui/ImageComponent';

export default function PageLoaderWrapper({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* Loader */}
            <div
                className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-transform duration-700 ease-in-out
        ${loading ? 'translate-y-0' : '-translate-y-full'}`}
            >
                <div className="flex items-center gap-3">
                    {/* Logo Fav */}
                    <div className="w-30 h-30 shrink-0 logo-fav-animate">
                        <ImageComponent url="/images/logo-fav.svg" img_title="" object_cover={false} />
                    </div>

                    {/* Logo Title */}
                    <div className="logo-title-reveal">
                        <ImageComponent url="/images/logo-title.svg" img_title="" object_cover={false} />
                    </div>
                </div>

            </div>

            {/* Page Content */}
            {!loading && <div className=''>{children}</div>}
        </>
    );
}
