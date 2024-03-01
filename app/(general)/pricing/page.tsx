import { Metadata } from "next"

export const metadata: Metadata = {
    title:'Pricing Page',
    description: 'Precio de productos',
    keywords: ['zapato','zapatilla','campera','pantalon']
} 
export default function PricingPage(){
    return (
             <span className="text-5xl">Princing Page</span>
    )
}