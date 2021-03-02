import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://app.pooltoken.finance/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Base farms',
    icon: 'FarmIcon',
    href: 'https://app.pooltoken.finance/base-farms',
  },
  {
    label: 'BSC pools',
    icon: 'BscIcon',
    href: 'https://app.pooltoken.finance/bsc-pools',
  },
  {
    label: 'Base Pools',
    icon: 'PoolIcon',
    href: 'https://app.pooltoken.finance/base-pools',
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://pooltoken.finance/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: 'https://pooltoken.finance/nft',
  // },
  // {
  //   label: 'Teams & Profile',
  //   icon: 'GroupsIcon',
  //   calloutClass: 'rainbow',
  //   items: [
  //     {
  //       label: 'Leaderboard',
  //       href: 'https://pooltoken.finance/teams',
  //     },
  //     {
  //       label: 'Task Center',
  //       href: 'https://pooltoken.finance/profile/tasks',
  //     },
  //     {
  //       label: 'Your Profile',
  //       href: 'https://pooltoken.finance/profile',
  //     },
  //   ],
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://pooltokens.info',
      },
      {
        label: 'Github',
        href: 'https://github.com/pooltoken',
      },
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: 'https://pancakeswap.finance/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://pooltoken.finance',
      },
      {
        label: 'Blog',
        href: 'https://pooltoken.finance',
      },
    ],
  },
]

export default config
