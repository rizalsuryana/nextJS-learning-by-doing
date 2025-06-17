import { ReactNode } from "react"

type AdminLayoutProps = {
    children: ReactNode;
};

export default function AdminLayout ({children} : AdminLayoutProps)  {
    return(
        <main>
            <header>
                ini Header admin
            </header>
                {children}
        </main>
    )
}