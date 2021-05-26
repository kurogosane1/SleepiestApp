import {
  Covers,
  References,
  Meditation,
  SleepStories,
  ComingSoon,
} from "../assets/Index";
import { v4 as uuidv4 } from "uuid";



export const mockData = {
  sounds: [
    {
      id: "12314314",
      name: "Soothing River",
      image: Covers.RiverFlow,
      media: References.SoothingRiver,
      color: "#FFCF67",
      content: "free",
    },
    {
      id: "12451431243",
      name: "Stormy Rain",
      image: Covers.StormyWeather,
      media: References.RainStorm,
      color: "#FFCF67",
      content: "free",
    },
    {
      id: "129019709312",
      name: "Star Gazing",
      image: Covers.StarGazing,
      media: References.GazingStar,
      color: "#FFCF67",
      content: "free",
    },
    {
      id: "1917361569014",
      name: "Camp Fire",
      image: Covers.CampFireCover,
      media: References.CampFire,
      color: "#FFCF67",
      content: "free",
    },
    {
      id: "087897879879",
      name: "Beach Wave",
      image: Covers.BeachWaveCover,
      media: References.BeachWaves,
      color: "#FFCF67",
      content: "free",
    },
    {
      id: "12390183109",
      name: "Gentle Rain",
      image: Covers.GentleRainCover,
      media: References.GentleRain,
      color: "#FFCF67",
      content: "free",
    },
  ],
  Meditation: [
    {
      id: "0917239173",
      name: "Guided Meditation",
      image: Covers.CalmGuidedCover,
      media: Meditation.guidedMeditation,
      color: "#CE5D51",
      content: "free",
    },
    {
      id: "123129790797655",
      name: "Guided Breathing",
      image: Covers.BreathingMeditationCover,
      media: Meditation.femaleGuidedMeditation,
      color: "#CE5D51",
      content: "free",
    },
    {
      id: "76783689192633123",
      name: "Meditation Story",
      image: Covers.NightCafe,
      media: Meditation.HarryStylesMeditation,
      color: "#CE5D51",
      content: "free",
    },
    {
      id: "123869872639182376",
      name: "Yoga Meditation",
      image: Covers.YMeditationCover,
      media: Meditation.meditationGuidance,
      color: "#CE5D51",
      content: "Premium",
    },
    {
      id: "1239871239723917283",
      name: "Deep Relaxation",
      image: Covers.GuidedMeditationCover,
      media: Meditation.DeepRelaxation,
      color: "#CE5D51",
      content: "Premium",
    },
    {
      id: "1982367190273913278",
      name: "Relax",
      image: Covers.RelaxCover,
      media: Meditation.MaleGuided,
      color: "#CE5D51",
      content: "Premium",
    },
  ],
  Stories: [
    {
      id: "79841798798654",
      name: "Beachcomb",
      image: Covers.NightCamp,
      media: SleepStories.BeachCombers,
      color: "#516ACE",
      content: "free",
    },
    {
      id: "8798458a67896463",
      name: "Sleep Guide",
      image: Covers.NightLodge,
      media: SleepStories.GuidedSleep,
      color: "#516ACE",
      content: "free",
    },
    {
      id: "8974515485d213",
      name: "Launderette",
      image: Covers.CatCover,
      media: SleepStories.Launderette,
      color: "#516ACE",
      content: "free",
    },
    {
      id: "das541452145411",
      name: "Wonder",
      image: Covers.WonderCover,
      media: SleepStories.NightCafeStory,
      color: "#516ACE",
      content: "free",
    },
    {
      id: "das541452145411dasdwe",
      name: "Rainy Day Attegquittes",
      image: Covers.GentleRainCover,
      media: SleepStories.AttequitesStories,
      color: "#516ACE",
      content: "free",
    },
    {
      id: "897982312345485dasdasd",
      name: "Cat Marina",
      image: Covers.CatMarinaCover,
      media: SleepStories.CatMarinaStory,
      color: "#516ACE",
      content: "premium",
    },
  ],
};

export const Comingsoon = [
  {
    id: "asdae12390940124",
    name: "Mars",
    image: ComingSoon.Cover1,
    color: "#7D0083",
    content: "premium",
  },
  {
    id: "asdae1239312312ew",
    name: "Little Mermaid",
    image: ComingSoon.Cover2,
    color: "#7D0083",
    content: "premium",
  },
  {
    id: "a2312d9sa0p324ed",
    name: "River Trees",
    image: ComingSoon.Cover3,
    color: "#7D0083",
    content: "premium",
  },
  {
    id: "a23131230pjnakkhsd",
    name: "Cats",
    image: ComingSoon.Cover4,
    color: "#BB8790",
    content: "free",
  },
  {
    id: "a23131230p312312sd",
    name: "Home",
    image: ComingSoon.Cover5,
    color: "#7D0083",
    content: "premium",
  },
  {
    id: "a2313123wq3123468415331",
    name: "Sunny Days",
    image: ComingSoon.Cover6,
    color: "#7D0083",
    content: "premium",
  },
  {
    id: "a2313123w",
    name: "Paris Life",
    image: ComingSoon.Cover7,
    color: "#7D0083",
    content: "premium",
  },
  {
    id: "a2313123w392819389ijnn",
    name: "Twilight Years",
    image: ComingSoon.Cover8,
    color: "#7D0083",
    content: "premium",
  },
  {
    id: "033nkj7293uo1i2nlk",
    name: "The Book Keeper",
    image: ComingSoon.Cover9,
    color: "#7D0083",
    content: "premium",
  },
  {
    id: "033nkj7293uo1i2e12390ikk",
    name: "Big Sur",
    image: ComingSoon.Cover10,
    color: "#7D0083",
    content: "premium",
  },
  {
    id: "0980912309huajsdh82133123124rdwasdaca",
    name: "Aladdins Carpet",
    image: ComingSoon.Cover11,
    color: "#7D0083",
    content: "premium",
  },

  {
    id: "9038912nekdjhasfuih98",
    name: "CLEAOPATRA",
    image: ComingSoon.Cover12,
    color: "#7D0083",
    content: "premium",
  },
];
export const PremiumMed = [
  {
    id: "asdae12390940124",
    name: "Theta Brainwave",
    image: ComingSoon.Cover12,
    color: "#7D0083",
    content: "premium",
  },
  {
    id: "asdae1239312312ew",
    name: "Sleep Hypnosis",
    image: ComingSoon.Cover11,
    color: "#7D0083",
    content: "premium",
  },
  {
    id: "a2312d9sa0p324ed",
    name: "Mindful Peace",
    image: ComingSoon.Cover10,
    color: "#7D0083",
    content: "premium",
  },
  {
    id: "a23131230pjnakkhsd",
    name: "Yoga Nidra",
    image: ComingSoon.Cover9,
    color: "#BB8790",
    content: "premium",
  },
  {
    id: "a23131230p312312sd",
    name: "Into the Present",
    image: ComingSoon.Cover1,
    color: "#7D0083",
    content: "premium",
  },
  {
    id: "a2313123wq3123468415331",
    name: "Cozy Cabin",
    image: ComingSoon.Cover5,
    color: "#7D0083",
    content: "premium",
  },
  {
    id: "a2313123w",
    name: "Sleep Travel",
    image: ComingSoon.Cover4,
    color: "#7D0083",
    content: "premium",
  },
  {
    id: "a2313123w392819389ijnn",
    name: "Nurture Yourself",
    image: ComingSoon.Cover2,
    color: "#7D0083",
    content: "premium",
  },
  {
    id: "033nkj7293uo1i2nlk",
    name: "Chakra Sleep",
    image: ComingSoon.Cover6,
    color: "#7D0083",
    content: "premium",
  },
  {
    id: "033nkj7293uo1i2e12390ikk",
    name: "Subtle Body",
    image: ComingSoon.Cover8,
    color: "#7D0083",
    content: "premium",
  },
  {
    id: "0980912309huajsdh82133123124rdwasdaca",
    name: "Lavender Dreams",
    image: ComingSoon.Cover4,
    color: "#7D0083",
    content: "premium",
  },

  {
    id: "9038912nekdjhasfuih98",
    name: "CLEAOPATRA",
    image: ComingSoon.Cover3,
    color: "#7D0083",
    content: "premium",
  },
];
