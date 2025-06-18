import { ReactNode } from "react"

type DashboardLayout = {
    children: ReactNode;
};

export default function DashboarLayout ({children} : DashboardLayout)  {
    return(
        <main>
            <header>
                ini dashborad
            </header>
                {children}
        </main>
    )
}

