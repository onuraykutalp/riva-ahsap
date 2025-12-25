"use client";
import StuffList from "@/components/StuffList";
import PageBanner from "@/components/PageBanner";

export default function StuffPage() {
    return (
        <>
            <PageBanner title="Mobilyalarımız" backgroundImage="/product-banner.jpg" />
            <section className="py-10 px-2 sm:px-8 md:px-20 bg-gradient-to-tr from-amber-50 via-white to-yellow-50 min-h-[80vh]">
                <StuffList />
            </section>
        </>
    );
}