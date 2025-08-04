import { INavLink } from "@/interfaces/ui.interface";
import { Variants } from "framer-motion";
import facebook from "../../../public/images/facebook.svg";
import instagram from "../../../public/images/instagram.svg";
import tiktok from "../../../public/images/tiktok.svg";
import youtube from "../../../public/images/youtube.svg";

import chasingStars from "../../../public/images/chasing-stars.svg";
import echoesOfTomorrow from "../../../public/images/echoes-of-tomorrow.svg";
import melodyInMotion from "../../../public/images/melody-in-motion.svg";
import rhythmOfTheNight from "../../../public/images/rhythm-of-the-night.svg";
import vibesOfTheCity from "../../../public/images/vibes-of-the-city.svg";

import { ITrack, IVideoComponent } from "@/interfaces/media.interface";
import img_post_01 from "../../../public/images/blog/posts/001.jpg";
import img_post_02 from "../../../public/images/blog/posts/002.jpg";
import img_post_03 from "../../../public/images/blog/posts/003.jpg";
import { IBlogPost } from "@/interfaces/blog.interface";
import divineEchoes from "../../../public/images/video-banners/divine-echoes.svg";
import gospelVideo from "../../../public/images/video-banners/gospel-video.svg";
import heavenlyMelodies from "../../../public/images/video-banners/heavenly-melodies.svg";
import jireh from "../../../public/images/video-banners/jireh.svg";
import sameGod from "../../../public/images/video-banners/same-god.svg";
import worshipWithMe from "../../../public/images/video-banners/worship-with-me.svg";

export const UPLOADED_MEDIA = {
  header_background_video_url:
    "https://res.cloudinary.com/dajqdbkyw/video/upload/v1754246463/header_ocgfno.mov",
    
    // audio on catalog
    melody_in_motion: "https://res.cloudinary.com/dajqdbkyw/video/upload/v1754246807/melody-in-motion_c6wejy.mp3",
    vibes_of_the_city: "https://res.cloudinary.com/dajqdbkyw/video/upload/v1754246775/vibes-of-the-city_jksh9u.mp3",
    rhythm_of_the_night: "https://res.cloudinary.com/dajqdbkyw/video/upload/v1754246772/rhythm-of-the-night_bjjl4x.mp3",
    chasing_stars: "https://res.cloudinary.com/dajqdbkyw/video/upload/v1754246761/chasing-stars_zvykc3.mp3",
    echoes_of_tomorrow: "https://res.cloudinary.com/dajqdbkyw/video/upload/v1754246759/echoes-of-tomorrow_ekvqze.mp3",
    
    // artist slider
    bill_praise: "https://res.cloudinary.com/dajqdbkyw/image/upload/v1754247361/bill-praise_ji8ixx.svg",
    naomi_bozimo: "https://res.cloudinary.com/dajqdbkyw/image/upload/v1754247329/naomi-bozimo_aghs5s.svg",
    dozy_jan: "https://res.cloudinary.com/dajqdbkyw/image/upload/v1754247328/dozy-jan_v2irtm.svg",
    cossy_brown: "https://res.cloudinary.com/dajqdbkyw/image/upload/v1754247386/cossy-brown_wms7nm.svg"
};

const { melody_in_motion, vibes_of_the_city, rhythm_of_the_night, chasing_stars, echoes_of_tomorrow, dozy_jan, naomi_bozimo, bill_praise, cossy_brown  } = UPLOADED_MEDIA;

export const audioTracks: ITrack[] = [
  {
    id: 1,
    track: "Echoes of Tomorrow",
    artist: "Ngoebi Binebai",
    genre: "Rap Beats",
    albumArt: echoesOfTomorrow,
    audioSrc: echoes_of_tomorrow,
  },
  {
    id: 2,
    track: "Rhythm of the Night",
    artist: "Adeola Iwalewa",
    genre: "Urban Rhythms",
    albumArt: rhythmOfTheNight,
    audioSrc: rhythm_of_the_night,
  },
  {
    id: 3,
    track: "Chasing Stars",
    artist: "Ugochukwu Anyaoku",
    genre: "Street Vibes",
    albumArt: chasingStars,
    audioSrc: chasing_stars,
  },
  {
    id: 4,
    track: "Vibes of the City",
    artist: "Nengi Amachree",
    genre: "Flow and Groove",
    albumArt: vibesOfTheCity,
    audioSrc: vibes_of_the_city,
  },
  {
    id: 5,
    track: "Melody in Motion",
    artist: "Rashida Danjuma",
    genre: "Rhythmic Poetry",
    albumArt: melodyInMotion,
    audioSrc: melody_in_motion,
  },
];

export const socialLinks = [
  {
    item: "facebook",
    icon: facebook,
    link: "https://www.facebook.com/ThePlatformMusic",
  },
  {
    item: "instagram",
    icon: instagram,
    link: "https://www.instagram.com/ThePlatformMusic",
  },
  {
    item: "tiktok",
    icon: tiktok,
    link: "https://www.tiktok.com/@ThePlatformMusic",
  },
  {
    item: "youtube",
    icon: youtube,
    link: "https://www.youtube.com/@ThePlatformMusic",
  },
];

export const artists = [
  {
    fullname: "Chisom Kanu",
    stagename: "Dozy Jan",
    image: dozy_jan,
    quote:
      "Music is the essence of our existence, a melody that resonates within every heart. At The Sound Haven, we embrace the transformative power of music to ignite creativity and foster connection. Let's embark on this harmonious adventure together!",
  },
  {
    fullname: "Folake Olabode",
    stagename: "Cossy Brown",
    image: cossy_brown,
    quote:
      "Music is the heartbeat of our lives, a rhythm that flows through every soul. we celebrate the enchanting influence of music to inspire innovation and build community. Join us on this melodic journey and let the music guide us!",
  },
  {
    fullname: "Naomi Bozimo",
    stagename: "Shleek",
    image: naomi_bozimo,
    quote:
      "Shleek’s sound is a magnetic mix of Afrobeat, R&B, soul, and alté influences—crafted with introspective lyrics, hypnotic rhythms, and a smooth, unmistakable vocal style that sets him apart.",
  },
  {
    fullname: "Bill Praise",
    stagename: "Wariso Dappa",
    image: bill_praise,
    quote:
      "Shleek’s sound is a magnetic mix of Afrobeat, R&B, soul, and alté influences—crafted with introspective lyrics, hypnotic rhythms, and a smooth, unmistakable vocal style that sets him apart.",
  },
];

export const navLinks: INavLink[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const missionStatement =
  "Our mission is to glorify God by producing and promoting spirit-filled gospel music that uplifts hearts, transforms lives and spreads the message of Christ to the world. We are committed to cultivating and nurturing a creative and Christ-centered environment where Music Ministers, Creators and Team Members are empowered, valued, respected and equitably supported. Through excellence, professionalism, integrity and a deep sense of purpose, we strive to honour every God-given gift and foster a community built on faith, trust, fairness and fellowship.";

export const headerMissionPreview =
  "To be a Christ-centered gospel  music label that upliftsand inspires through spirit-filled music, fostering a community where every Music Minister, Creator and Team Member is treated with fairness, openness, respect and integrity ensuring that their God-given talents and contributions are honoured and equitably rewarded.";

export const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const menuVariants: Variants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 200,
    },
  },
  exit: {
    y: "-100%",
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
};

export const linkVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.05,
      ease: "easeOut",
      duration: 0.4,
    },
  }),
};

export const swiperBreakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 25,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
  1280: {
    slidesPerView: 5,
    spaceBetween: 40,
  },
};

export const blogSwiperBreakpoints = {
  640: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 25,
  },
  1024: {
    slidesPerView: 3.2,
    spaceBetween: 30,
  },
  1280: {
    slidesPerView: 3.2,
    spaceBetween: 40,
  },
};

export const musicPosts: IBlogPost[] = [
  {
    id: "1",
    slug: "power-of-worship-music-spiritual-transformation",
    title: "The Power of Worship Music in Spiritual Transformation",
    excerpt:
      "Discover how worship music serves as a bridge between the earthly and divine, transforming hearts and minds through spirit-filled melodies.",
    content: `
      <p>Worship music has always held a sacred place in the Christian faith, serving as more than just entertainment—it's a powerful tool for spiritual transformation and divine connection. Through carefully crafted melodies and spirit-filled lyrics, worship music creates an atmosphere where hearts can be touched and lives can be changed.</p>

      <h2>The Biblical Foundation of Worship Music</h2>
      <p>Scripture is filled with references to music as a form of worship and praise. From David's psalms to the songs of angels, we see that music has always been God's chosen medium for expressing praise and adoration. The Bible tells us to "sing and make music from your heart to the Lord" (Ephesians 5:19), highlighting the intimate connection between music and spiritual expression.</p>

      <h2>How Music Transforms the Heart</h2>
      <p>Worship music works on multiple levels to facilitate spiritual transformation:</p>
      <ul>
        <li><strong>Emotional Connection:</strong> Music touches our emotions in ways that spoken word alone cannot, opening our hearts to receive God's love</li>
        <li><strong>Memory and Meditation:</strong> Songs help us memorize scripture and truth, allowing us to meditate on God's word throughout the day</li>
        <li><strong>Corporate Unity:</strong> When believers sing together, it creates a powerful sense of unity and shared purpose</li>
        <li><strong>Spiritual Atmosphere:</strong> Music can usher in God's presence and create an environment conducive to prayer and reflection</li>
      </ul>

      <h2>The Role of the Music Minister</h2>
      <p>Music ministers and worship leaders carry a sacred responsibility. They are not just performers, but shepherds who guide congregations into meaningful encounters with God. This calling requires not only musical skill but also spiritual maturity and a heart for ministry.</p>

      <blockquote>
        "Music is the language of the soul, and worship music is the soul speaking directly to its Creator."
      </blockquote>

      <h2>Creating Transformative Worship Experiences</h2>
      <p>Effective worship music ministry involves careful song selection, skilled musicianship, and most importantly, a heart focused on glorifying God rather than showcasing talent. When these elements come together under the anointing of the Holy Spirit, true transformation can occur.</p>

      <p>As we continue to explore the depths of worship music's impact, we're reminded that our ultimate goal is not just to make beautiful music, but to create opportunities for people to encounter the living God through song.</p>
    `,
    image: img_post_01,
    author: {
      name: "Pastor Michael Johnson",
      bio: "Worship Pastor with 15+ years of ministry experience, dedicated to creating transformative worship experiences",
    },
    publishedAt: "2025-08-03T10:00:00Z",
    readTime: 8,
    tags: ["Worship", "Spiritual Growth", "Ministry", "Gospel Music"],
    category: "Worship",
  },
  {
    id: "2",
    slug: "building-effective-church-music-ministry-team",
    title: "Building an Effective Church Music Ministry Team",
    excerpt:
      "Learn practical strategies for developing, nurturing, and leading a unified music ministry team that serves with excellence and heart.",
    content: `
      <p>Building a strong music ministry team is one of the most rewarding yet challenging aspects of church leadership. It requires a delicate balance of musical excellence, spiritual maturity, and interpersonal skills. A well-functioning music team can elevate worship experiences and draw people closer to God.</p>

      <h2>The Foundation: Prayer and Vision</h2>
      <p>Every successful music ministry begins with prayer and a clear vision. Before recruiting team members or planning rehearsals, spend time seeking God's heart for your ministry. What is He calling your team to accomplish? How does music ministry fit into your church's overall mission?</p>

      <h2>Recruiting the Right People</h2>
      <p>When building your team, look for individuals who demonstrate:</p>
      <ol>
        <li><strong>Heart for Worship:</strong> Technical skill is important, but a genuine love for God and desire to serve is essential</li>
        <li><strong>Teachable Spirit:</strong> Team members should be open to feedback and committed to continuous improvement</li>
        <li><strong>Reliability:</strong> Consistent attendance at rehearsals and services is crucial for team unity</li>
        <li><strong>Team Player Attitude:</strong> Music ministry is about serving together, not individual performance</li>
        <li><strong>Spiritual Maturity:</strong> Team members should be growing in their faith and living lives that reflect Christ</li>
      </ol>

      <h2>Developing Musical Excellence</h2>
      <p>Excellence in worship doesn't mean perfection—it means giving our best to God. Regular rehearsals, skill development workshops, and constructive feedback help team members grow both musically and spiritually.</p>

      <blockquote>
        "We are not performing for people; we are leading people in worship to our awesome God."
      </blockquote>

      <h2>Fostering Unity and Communication</h2>
      <p>Regular team meetings, prayer times, and fellowship opportunities help build relationships and maintain unity. Open communication channels allow team members to share concerns, ideas, and testimonies.</p>

      <h2>Handling Challenges with Grace</h2>
      <p>Every team faces challenges—scheduling conflicts, personality differences, or skill gaps. Address issues quickly and biblically, always seeking restoration and unity rather than simply solving problems.</p>

      <p>Remember, the goal is not just to create beautiful music, but to develop disciples who use their gifts to glorify God and serve His people with joy and excellence.</p>
    `,
    image: img_post_02,
    author: {
      name: "Sarah Williams",
      bio: "Music Director and team development specialist with expertise in building thriving ministry teams",
    },
    publishedAt: "2025-08-03T14:30:00Z",
    readTime: 7,
    tags: ["Team Building", "Music Ministry", "Leadership", "Church Music"],
    category: "Ministry",
  },
  {
    id: "3",
    slug: "gospel-music-production-tips-home-studio",
    title:
      "Gospel Music Production: Creating Professional Sounds in Your Home Studio",
    excerpt:
      "Master the art of gospel music production with practical tips for recording, mixing, and producing spirit-filled music from your home studio.",
    content: `
      <p>The landscape of music production has dramatically changed in recent years, making it possible for gospel artists and worship leaders to create professional-quality recordings from their home studios. With the right knowledge, equipment, and techniques, you can produce music that rivals commercial releases.</p>

      <h2>Essential Equipment for Gospel Production</h2>
      <p>You don't need to break the bank to start producing quality gospel music. Here are the essentials:</p>
      <ul>
        <li><strong>Audio Interface:</strong> A good 2-4 channel interface like the Focusrite Scarlett series</li>
        <li><strong>Studio Monitors:</strong> Accurate speakers for mixing (KRK Rokit or Yamaha HS series)</li>
        <li><strong>Microphones:</strong> A versatile condenser mic for vocals and a dynamic mic for instruments</li>
        <li><strong>Headphones:</strong> Closed-back headphones for recording, open-back for mixing</li>
        <li><strong>DAW Software:</strong> Logic Pro, Pro Tools, or even free options like GarageBand</li>
      </ul>

      <h2>Recording Techniques for Gospel Vocals</h2>
      <p>Gospel vocals are often the centerpiece of the song, requiring special attention to capture their power and emotion:</p>

      <h3>Microphone Placement</h3>
      <p>Position the microphone 6-12 inches from the singer, slightly off-axis to reduce plosives. Use a pop filter to minimize breath sounds while maintaining the natural character of the voice.</p>

      <h3>Room Treatment</h3>
      <p>Even simple room treatment like hanging blankets or recording in a closet full of clothes can dramatically improve your vocal recordings by reducing unwanted reflections.</p>

      <h2>The Gospel Sound: Key Production Elements</h2>
      <p>Gospel music has distinctive characteristics that set it apart:</p>
      <ul>
        <li><strong>Rich Harmonies:</strong> Layer multiple vocal parts to create lush, full arrangements</li>
        <li><strong>Organ and Piano:</strong> Traditional Hammond organ and acoustic piano sounds are staples</li>
        <li><strong>Dynamic Range:</strong> Gospel music often moves from quiet, intimate moments to powerful, soaring sections</li>
        <li><strong>Rhythm Section:</strong> Tight, pocket-driven drums and bass that support rather than dominate</li>
      </ul>

      <h2>Mixing Gospel Music</h2>
      <p>When mixing gospel tracks, focus on clarity and emotional impact:</p>

      <blockquote>
        "The mix should serve the message and the ministry, enhancing rather than overshadowing the spiritual content."
      </blockquote>

      <h3>Vocal Treatment</h3>
      <p>Use compression to control dynamics while maintaining the natural expression of the performance. Add reverb and delay tastefully to create space without muddying the mix.</p>

      <h3>Instrumental Balance</h3>
      <p>Create a mix where every instrument has its place. Use EQ to carve out frequency spaces for each element, and remember that sometimes less is more.</p>

      <h2>Final Thoughts</h2>
      <p>Remember that technology is just a tool—the heart and anointing behind the music are what truly matter. Pray over your projects, seek God's guidance in your creative process, and trust that He can use your music to touch hearts and change lives, regardless of your studio setup.</p>
    `,
    image: img_post_03,
    author: {
      name: "David Thompson",
      bio: "Audio engineer and producer specializing in gospel and contemporary Christian music",
    },
    publishedAt: "2025-08-03T09:15:00Z",
    readTime: 10,
    tags: [
      "Music Production",
      "Home Studio",
      "Gospel Music",
      "Audio Engineering",
    ],
    category: "Production",
  },
  {
    id: "4",
    slug: "nurturing-young-voices-children-youth-choir-ministry",
    title:
      "Nurturing Young Voices: Building a Thriving Children and Youth Choir Ministry",
    excerpt:
      "Discover effective strategies for developing children and youth choir programs that foster both musical growth and spiritual development.",
    content: `
      <p>Children and youth choir ministry holds a special place in the heart of the church. It's where young voices learn to worship, where musical foundations are laid, and where the next generation of worship leaders is nurtured. Building a successful program requires patience, creativity, and a deep understanding of how young people learn and grow.</p>

      <h2>The Importance of Early Musical Training</h2>
      <p>Research consistently shows that early exposure to music has profound benefits for children's cognitive, emotional, and spiritual development. In the context of church ministry, children's choirs provide a structured environment for young people to develop their gifts while learning foundational truths about faith and worship.</p>

      <h2>Age-Appropriate Programming</h2>
      <p>Different age groups require different approaches:</p>

      <h3>Children's Choir (Ages 5-12)</h3>
      <ul>
        <li>Focus on fun, interactive songs with motions and simple harmonies</li>
        <li>Keep rehearsals short (30-45 minutes) with frequent breaks</li>
        <li>Use visual aids, games, and storytelling to teach musical concepts</li>
        <li>Emphasize participation over perfection</li>
      </ul>

      <h3>Youth Choir (Ages 13-18)</h3>
      <ul>
        <li>Introduce more complex harmonies and contemporary styles</li>
        <li>Provide leadership opportunities within the choir</li>
        <li>Address voice changes with patience and understanding</li>
        <li>Connect music to relevant life issues and spiritual growth</li>
      </ul>

      <h2>Creating an Inclusive Environment</h2>
      <p>Every child should feel welcome and valued in choir ministry, regardless of their musical ability or background. This means:</p>
      <ul>
        <li>Celebrating effort and improvement, not just natural talent</li>
        <li>Providing multiple ways for children to participate (singing, instruments, drama)</li>
        <li>Being sensitive to different learning styles and needs</li>
        <li>Creating a safe space where mistakes are learning opportunities</li>
      </ul>

      <blockquote>
        "Every child has a song in their heart. Our job is to help them find it and offer it back to God."
      </blockquote>

      <h2>Practical Rehearsal Tips</h2>
      <p>Effective rehearsals are the backbone of any successful choir program:</p>
      <ol>
        <li><strong>Start with Prayer:</strong> Begin each rehearsal by inviting God's presence and blessing</li>
        <li><strong>Warm-Up Creatively:</strong> Use fun vocal exercises that also teach technique</li>
        <li><strong>Break Down Complex Parts:</strong> Teach difficult sections in small, manageable pieces</li>
        <li><strong>Use Positive Reinforcement:</strong> Celebrate successes and progress, no matter how small</li>
        <li><strong>End on a High Note:</strong> Finish rehearsals with encouragement and excitement for the next meeting</li>
      </ol>

      <h2>Performance Opportunities</h2>
      <p>Regular performance opportunities help children build confidence and see the value of their preparation. Consider:</p>
      <ul>
        <li>Special church services (Christmas, Easter, Mother's Day)</li>
        <li>Community events and outreach programs</li>
        <li>Nursing home visits and ministry opportunities</li>
        <li>Children's choir festivals and competitions</li>
      </ul>

      <h2>Working with Parents and Families</h2>
      <p>Parents are your greatest allies in children's choir ministry. Keep them informed, involved, and excited about what their children are learning. Regular communication, parent volunteer opportunities, and family events help build a strong support network.</p>

      <p>Remember, you're not just teaching music—you're shaping young hearts and minds for a lifetime of worship and service to God. The investment you make in these young voices today will echo in the kingdom for generations to come.</p>
    `,
    image: img_post_01,
    author: {
      name: "Maria Rodriguez",
      bio: "Children's music specialist with 12 years of experience developing youth choir programs",
    },
    publishedAt: "2025-08-03T16:45:00Z",
    readTime: 9,
    tags: [
      "Children's Ministry",
      "Youth Choir",
      "Music Education",
      "Worship Training",
    ],
    category: "Education",
  },
  {
    id: "5",
    slug: "choosing-right-worship-songs-congregation",
    title: "Choosing the Right Worship Songs for Your Congregation",
    excerpt:
      "Learn how to select worship songs that engage your congregation, fit your church's style, and create meaningful worship experiences.",
    content: `
      <p>One of the most important responsibilities of a worship leader is selecting songs that will draw the congregation into meaningful worship. The right song choices can make the difference between a congregation that participates wholeheartedly and one that remains passive. This decision requires wisdom, discernment, and a deep understanding of your church community.</p>

      <h2>Know Your Congregation</h2>
      <p>Before selecting any song, you must understand the people you're leading. Consider these factors:</p>
      <ul>
        <li><strong>Age Demographics:</strong> Different generations connect with different musical styles and expressions</li>
        <li><strong>Cultural Background:</strong> Honor the cultural diversity in your congregation through inclusive song choices</li>
        <li><strong>Spiritual Maturity:</strong> New believers may need simpler, more direct songs while mature believers might appreciate deeper theological content</li>
        <li><strong>Musical Comfort Zone:</strong> Gradually introduce new styles rather than making dramatic changes</li>
      </ul>

      <h2>Theological Soundness</h2>
      <p>Every worship song is a theological statement. As worship leaders, we have a responsibility to ensure that the songs we choose are biblically sound and doctrinally appropriate. Ask yourself:</p>
      <ul>
        <li>Does this song align with biblical truth?</li>
        <li>Are the lyrics clear and meaningful?</li>
        <li>Does it point people toward God or focus too much on personal experience?</li>
        <li>Would I be comfortable teaching these lyrics as doctrine?</li>
      </ul>

      <h2>Worship Flow and Progression</h2>
      <p>Great worship services tell a story through song. Consider how songs work together to create a cohesive worship experience:</p>

      <h3>Opening Songs</h3>
      <p>Begin with songs that invite people in and help them transition from the outside world to a place of worship. These might be more upbeat and accessible.</p>

      <h3>Worship Progression</h3>
      <p>Move from songs of invitation to songs of declaration, then to more intimate expressions of worship and surrender.</p>

      <h3>Response and Commitment</h3>
      <p>End with songs that allow people to respond to what God has spoken during the service.</p>

      <blockquote>
        "The goal is not just to sing songs, but to create a pathway for hearts to encounter the living God."
      </blockquote>

      <h2>Practical Song Selection Criteria</h2>
      <p>When evaluating new songs, consider these practical factors:</p>
      <ol>
        <li><strong>Vocal Range:</strong> Can the average person in your congregation sing it comfortably?</li>
        <li><strong>Melodic Accessibility:</strong> Is the melody easy to learn and remember?</li>
        <li><strong>Lyrical Content:</strong> Are the words meaningful and easy to understand?</li>
        <li><strong>Instrumental Requirements:</strong> Can your team play it effectively with your current instrumentation?</li>
        <li><strong>Copyright and Licensing:</strong> Do you have proper permissions to use the song?</li>
      </ol>

      <h2>Balancing Old and New</h2>
      <p>A healthy worship repertoire includes both timeless hymns and contemporary songs. Classic hymns provide theological depth and connect us to our heritage, while newer songs often express faith in more contemporary language and musical styles.</p>

      <h2>Seasonal and Thematic Considerations</h2>
      <p>Align your song choices with the church calendar and sermon themes when appropriate. This creates cohesion between different elements of the service and reinforces key messages.</p>

      <h2>Getting Feedback and Making Adjustments</h2>
      <p>Regularly seek feedback from church leadership and congregation members. Be willing to adjust your approach based on their input while staying true to your calling as a worship leader.</p>

      <p>Remember, there is no perfect song for every situation, but there are songs that are perfect for specific moments and specific congregations. Trust the Holy Spirit to guide your choices, and always keep the focus on glorifying God and edifying His people.</p>
    `,
    image: img_post_02,
    author: {
      name: "James Patterson",
      bio: "Worship leader and songwriter with expertise in congregational worship dynamics",
    },
    publishedAt: "2025-08-03T11:20:00Z",
    readTime: 8,
    tags: [
      "Worship Leading",
      "Song Selection",
      "Congregational Worship",
      "Church Music",
    ],
    category: "Worship",
  },
];

export const ourArtistsRegular = {
  dozy_jan_slider: "https://res.cloudinary.com/dajqdbkyw/image/upload/v1754247727/dozy-jan_jo9vfe.svg",
  cossy_brown_slider: "https://res.cloudinary.com/dajqdbkyw/image/upload/v1754247714/cossy-brown_rfovgs.svg"
}

export const videos: IVideoComponent[] = [
  {
    banner: gospelVideo,
    title: "Mictos - A Place of Glory",
    url: "https://res.cloudinary.com/dajqdbkyw/video/upload/v1754041334/samples/dance-2.mp4",
  },
  {
    banner: jireh,
    title: "Elysian Harmony - A Journey to the Divine",
    url: "https://res.cloudinary.com/dajqdbkyw/video/upload/v1754041332/samples/sea-turtle.mp4",
  },
  {
    banner: worshipWithMe,
    title: "Celestial Voices - A Symphony of Faith",
    url: "https://res.cloudinary.com/dajqdbkyw/video/upload/v1754041332/samples/elephants.mp4",
  },
  {
    banner: divineEchoes,
    title: "Divine Echoes - A Celebration of Grace",
    url: "https://res.cloudinary.com/dajqdbkyw/video/upload/v1754246463/header_ocgfno.mov",
  },
  {
    banner: heavenlyMelodies,
    title: "Heavenly Melodies - An Anthem of Hope",
    url: "https://res.cloudinary.com/dajqdbkyw/video/upload/v1754041334/samples/dance-2.mp4",
  },
  {
    banner: sameGod,
    title: "Sacred Rhythms - A Tribute to the Spirit",
    url: "https://res.cloudinary.com/dajqdbkyw/video/upload/v1754041332/samples/sea-turtle.mp4",
  }
];