import {useRouter} from 'next/router';

export default function Products(){
    const router=useRouter();
    return <h1>hi{JSON.stringify(router.query)}</h1>
    // http://localhost:3000/product/122 -inside product folder
}