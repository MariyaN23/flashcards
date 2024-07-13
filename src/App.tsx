// eslint-disable-next-line import/no-unresolved
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Header } from '@/components/ui/header/header'
import { Input } from '@/components/ui/input'

export function App() {
  return (
    <div>
      <Header />
      <Button variant={'primary'}>Button</Button>
      <Button as={'a'} href={'/'} variant={'primary'}>
        Link
      </Button>
      <br />
      <Input error placeholder={'Input'} />
      <Input placeholder={'Input'} />
      <Input disabled placeholder={'Input'} />
      <Input disabled placeholder={'Input'} variant={'withIcon'} />
      <Input placeholder={'Input'} variant={'withIcon'} />
      <br />
      <Input placeholder={'Input search'} variant={'search'} />
      <Card />
      <br />
      <Checkbox />
      <Checkbox label={'Check-box'} />
      <Checkbox disabled />
    </div>
  )
}
