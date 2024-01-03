import { r3f } from '@/helpers/global'

interface ThreeProps {
    children: any;
}

export const Three = ({ children }: ThreeProps) => {
    return <r3f.In>{children}</r3f.In>
}