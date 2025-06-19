import Link from "next/link";

type settingProps = {
    siteName: string,
}

async function getSetting(): Promise<settingProps> {
    const res = await fetch('http://localhost:4000/settings')
    const setting = await res.json()
    return setting;
}

export async function Header() {  

    const setting = await getSetting()
    console.log(setting)

  return (
     <header>
        <section>
            {setting.siteName} | 0878 | rizalsuryana.dev@gmail.com
        </section>
        <nav>
          <Link href='/'> | Home |</Link> 
          <Link href='/about'> About |</Link>
          <Link href="/products"> Products |</Link>
          <Link href="/posts"> Post |</Link>
        </nav>
      </header>
  );
}