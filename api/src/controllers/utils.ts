// Sample to be posted in DB in an bulk post.

import { CardType } from "../types";

const dataArray: CardType[] = [
  {
    name: "Kanye West",
    description:
      "Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.",
    category: "entertainment",
    picture:
      "https://www.nme.com/wp-content/uploads/2022/02/Kanye-West-DONDA-696x442.jpg",
    lastUpdated: "2020-03-10T23:08:57.892Z",
    votes: {
      positive: 23,
      negative: 36,
    },
  },
  {
    name: "Mark Zuckerberg",
    description:
      "Born in White Plains, New York, Zuckerberg attended Harvard University, where he launched the Facebook social networking service from his dormitory room on February 4, 2004.",
    category: "business",
    picture:
      "https://mediacloud.theweek.com/image/private/s--yfzmWpS0--/f_auto,t_primary-image-desktop@1/v1608227923/24948_article_full.jpg",
    lastUpdated: "2021-02-14T23:10:19.134Z",
    votes: {
      positive: 418,
      negative: 324,
    },
  },
  {
    name: "Cristina Fernández de Kirchner",
    description:
      "Her first term of office started with a conflict with the agricultural sector, and her proposed taxation system was rejected.",
    category: "politics",
    picture:
      "https://estaticos.elcolombiano.com/binrepository/848x565/59c0/780d565/none/11101/WBWX/cristina-fernandez-de-kirchner_40600923_20220902073119.jpg",
    lastUpdated: "2020-12-10T23:41:07.120Z",
    votes: {
      positive: 45,
      negative: 97,
    },
  },
  {
    name: "Malala Yousafzai",
    description:
      "The daughter of educational activist Ziauddin, Yousafzai was born to a Pashtun family in Mingora, Khyber Pakhtunkhwa, Pakistan. Her family came to run a chain of schools in the region.",
    category: "politics",
    picture:
      "https://cdn.britannica.com/71/179071-050-CF95982C/Malala-Yousafzai-2013.jpg",
    lastUpdated: "2020-12-10T23:41:07.120Z",
    votes: {
      positive: 18,
      negative: 3,
    },
  },
  {
    name: "Elon Musk",
    description:
      "In 2002, Musk founded SpaceX, an aerospace manufacturer and space transport services company, of which he is CEO, CTO, and lead designer.",
    category: "business",
    picture: "https://ichef.bbci.co.uk/images/ic/640x360/p03c84wz.jpg",
    lastUpdated: "2020-12-20T23:43:38.041Z",
    votes: {
      positive: 1237,
      negative: 894,
    },
  },
  {
    name: "Greta Thunberg",
    description:
      "Thunberg's activism started after convincing her parents to adopt several lifestyle choices to reduce their own carbon footprint.",
    category: "environment",
    picture:
      "https://i.guim.co.uk/img/media/bebb8c5677ea8addac562dca36b0ac4e9987b4a4/0_0_4684_2810/master/4684.jpg?width=1020&dpr=2&s=none",
    lastUpdated: "2021-02-26T23:44:50.326Z",
    votes: {
      positive: 118,
      negative: 45,
    },
  },
];


export default dataArray