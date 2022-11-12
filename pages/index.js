import {useRouter} from 'next/router';
import Link from 'next/link';

console.log("Home loaded  ===="+process.env.NEXT_PUBLIC_API_URL)
export default function Home(){
    const router=useRouter();
    return <Link href="/product" prefetch={false}>Products</Link>
    // return <h1>Index{JSON.stringify(router.query)}</h1>
    //http://localhost:3000/?id=g
}
// import { withAmp } from 'next/amp'

// function Home() {

// return <p> Welcome to AMP + Next.js.</p>

// }

// export default withAmp(Home)

 