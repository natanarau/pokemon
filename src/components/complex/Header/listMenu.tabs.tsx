import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import GamesIcon from '@mui/icons-material/Games';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import NewspaperIcon from '@mui/icons-material/Newspaper';

export enum ListMenuTabs {
  Home = '',
  Pokemons = 'pokemons',
  VideoGame = 'videoGame',
  GCCPokemon = 'gccpokemon',
  TVPokemon = 'tvpokemon',
  PlayPokemon = 'playpokemon',
  News = 'news'
}

export const menuList = [
  {
    label: 'Home',
    page: ListMenuTabs.Home,
    icon: <HomeRoundedIcon/>
  },
  {
    label: 'Pokemons',
    page: ListMenuTabs.Pokemons,
    icon: <CatchingPokemonIcon/>
  },
  {
    label: 'VideoGame',
    page: ListMenuTabs.VideoGame,
    icon: <GamesIcon/>
  },
  {
    label: 'GCC Pokemon',
    page: ListMenuTabs.GCCPokemon,
    icon: <ViewCarouselIcon/>
  },
  {
    label: 'TV Pokemon',
    page: ListMenuTabs.TVPokemon,
    icon: <LiveTvIcon/>
  },
  {
    label: 'Play Pokemon',
    page: ListMenuTabs.PlayPokemon,
    icon: <EmojiEventsIcon/>
  },
  {
    label: 'News',
    page: ListMenuTabs.News,
    icon: <NewspaperIcon/>
  },
]