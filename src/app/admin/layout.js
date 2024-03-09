import AdminHeader from "@/components/AdminHeader";

export default function adminLayout({children}){
    return (
        <section>
                    <AdminHeader />
                    {children}

        </section>
    );
}