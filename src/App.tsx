import { Button } from '@/components/ui/button'

export function App() {
  return (
    <div>
      <Button variant={'primary'}>Button</Button>
      <Button as={'a'} href={'/'} variant={'primary'}>
        Link
      </Button>
    </div>
  )
}
