import type { Meta, StoryObj } from '@storybook/react'

import { TableBody } from '@/components/ui/table/table-components/table-body'
import { TableCell } from '@/components/ui/table/table-components/table-cell'
import { TableEmpty } from '@/components/ui/table/table-components/table-empty'
import { TableHead } from '@/components/ui/table/table-components/table-header/table-head'
import { TableHeadCell } from '@/components/ui/table/table-components/table-header/table-head-cell'
import { TableRow } from '@/components/ui/table/table-components/table-row'
import { Typography } from '@/components/ui/typography'

import { Table } from './'

const meta = {
  component: Table,
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <TableHead>
          <TableRow>
            <TableHeadCell>Название</TableHeadCell>
            <TableHeadCell align={'center'}>Описание</TableHeadCell>
            <TableHeadCell>Ссылка</TableHeadCell>
            <TableHeadCell>Тип</TableHeadCell>
            <TableHeadCell>Вид</TableHeadCell>
            <TableHeadCell />
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Web Basic</TableCell>
            <TableCell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut sed do eiusmod tempoei usmodr sit amet, consectetur adipiscing elit, sed
              do...
            </TableCell>
            <TableCell>
              <Typography
                as={'a'}
                href={'https://it-incubator.io/'}
                target={'_blank'}
                variant={'link1'}
              >
                Какая-то ссылка кудато на какой-то источник с информациейо ссылка кудато на какой-то
                источник
              </Typography>
            </TableCell>
            <TableCell>Основной</TableCell>
            <TableCell>Читать</TableCell>
            <TableCell>🦎</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Web Basic</TableCell>
            <TableCell>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut sed do eiusmod tempoei usmodr sit amet, consectetur adipiscing elit, sed
              do...
            </TableCell>
            <TableCell>
              Какая-то ссылка кудато на какой-то источник с информациейо ссылка кудато на какой-то
              источник
            </TableCell>
            <TableCell>Основной</TableCell>
            <TableCell>Читать</TableCell>
            <TableCell>✨</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
}

const data = [
  {
    category: 'Основной',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    id: '01',
    link: 'Какая-то ссылка кудато на какой-то источник с информациейо ссылка кудато на какой-то',
    title: 'Web Basic',
    type: 'Читать',
  },
  {
    category: 'Основной',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    id: '02',
    link: 'Какая-то ссылка куда-то',
    title: 'Web Basic',
    type: 'Читать',
  },
  {
    category: 'Основной',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    id: '03',
    link: 'Какая-то ссылка кудато на какой-то источник с информациейо ссылка кудато на какой-то. Какая-то ссылка кудато на какой-то источник с информациейо ссылка куда-то на какой-то',
    title: 'Web Basic',
    type: 'Читать',
  },
]

export const WithMapMethod: Story = {
  args: {
    children: (
      <>
        <TableHead>
          <TableRow>
            <TableHeadCell>Название</TableHeadCell>
            <TableHeadCell align={'center'}>Описание</TableHeadCell>
            <TableHeadCell>Ссылка</TableHeadCell>
            <TableHeadCell>Тип</TableHeadCell>
            <TableHeadCell>Вид</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(item => (
            <TableRow key={item.id}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.link}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell>{item.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </>
    ),
  },
}

export const Empty: Story = {
  render: () => <TableEmpty />,
}
