import '../constants/styles.css';
import CountryCards from '../components/CountryCards';

function Home() {

  return (
    <div className="App">
      <div className="background">
        <div className="title">Zulfa's Food Blog</div>
        <div className="subtitle">History & culture through recipes</div>
        <p className="source-subtitle">Source: Recipes.net</p>
      </div>
      <div className="content" id="about-me">
        <div className='about-me'>
          <div className="image-container">
            <img src="https://zulfa-varvani.github.io/zulfa-blog/public/z_new.jpg" alt="Your Profile" />
          </div>
          <div className="text-container">
            <h2>About Me 🙋🏽‍♀️</h2>
            <p>
              My name is Zulfa Varvani and I'm currently in my last year of biomedical engineering (almost there 😅)!
            </p>
            <p>
              I've always loved different kinds of food from variety of cultures. Most of all I love history and its preservation! Recently, my mom bought a cookbook of Gazan recipes and I've really come to enjoy the
              history and lifestyle that were contained with each recipe. I found the book to be very informative and a good way to get one's culture showcased, where circumstances prevent
              you from doing so. Unfortunately, the current situation for Gaza has become so much worse due to violent occupational entities seeking to destroy a beautiful culture.
              I really find times like this important to share culture and history, where there is danger of both being lost.
              The resilience and steadfastness of Gazans has touched the world, bringing the best and worst out of people, and truly showing the reality we live in.
            </p>
            <p>
              I want to honour the author of The Gazan Kitchen by making my own recipe blog, containing my favourite recipes from around the world and some historical context!
            </p>
          </div>
        </div>
      </div>
      <div className="content">
        <h2>Countries & Cultures of Inspiration</h2>
        <p>
          I've organized my recipes according to their origin culture (some recipes are shared between cultures, with some adjustment preferences).
          You can also read more history on both the food and the culture. Click one of the cards to learn some yummy facts 😋
        </p>
        <div className='card-container'>
          <CountryCards
            title={'Kenya'}
            information={'Starting with my own country, Kenya is a diverse East African country with a rich history! The dishes in Kenya come from a variety of backgrounds like Persian, Arab, East Bantu, and Indian, and sometimes vary between different communities in Kenya!'}
            link={'/kenya'}
            image_link={'https://tyitelle.files.wordpress.com/2022/04/evenementon770-fc1c2.jpg?w=1200'}
          />
          <CountryCards
            title={'Palestine'}
            information={"Palestinian dishes are by far my favourite cuisine (slight bias here)! With rich, religious and ancient history, Palestine has a variety of key dishes that are specific to each Palestinian city, and they're super easy to make. From Yaffa orange cakes to Nablusi kunafe, Palestine will be free!"}
            link={'/palestine'}
            image_link={'https://static01.nyt.com/images/2020/12/01/dining/01review-ayat1/merlin_180599085_fd93cfca-8fe5-4312-a7d5-5e69a9b2e76f-articleLarge.jpg?quality=75&auto=webp&disable=upscale'}
          />
          <CountryCards
            title={'Egypt'}
            information={"I don't need to go too depth into Egyptian history, we all know about pyramids and mummies! Egyptian cuisine has one of the most interesting backgrounds. Their national dish, koshary, is probably the best thing I ever had in Egypt, and the most fun to assemble."}
            link={'/egypt'}
            image_link={'https://media.cnn.com/api/v1/images/stellar/prod/191206120013-7-koshary-egypt-s-national-dish-photo-courtesy-emeco-travel-etpb.jpg?q=w_1600,h_900,x_0,y_0,c_fill/h_618'}
          />
        </div>
        <div className='card-container'>
          <CountryCards
            title={'India'}
            information={"Indian cuisine is known for its rich taste and use of a variety of spices. With my ancestors coming from India, you'd think I know all about India and its beautiful history. I learnt so much though! Be wary, Indian food can get very spicy, so feel free to adjust where needed!"}
            link={''}
            image_link={'https://d3d0lqu00lnqvz.cloudfront.net/media/media/42bfb23f-38e3-4198-9336-5aa22b75093e.jpg'}
          />
          <CountryCards
            title={'Thailand'}
            information={"Who doesn't love Thai food on a Friday night? Thailand has a beautiful culture with beautiful cities, and very tasty foods. I don't enjoy seafood as much though, but I can always find alternatives with chicken and meat. Thai food is also good for vegan/vegetarians!"}
            link={''}
            image_link={'https://ichef.bbci.co.uk/images/ic/1200xn/p0g3gr7p.jpg'}
          />
          <CountryCards
            title={'Turkey'}
            information={'Turkey has always been a special place in many Muslims hearts. Their food, history, and cities are among many of the things that I love about Turkey (and their modest clothing), making Turkey the best vacation place. I really hope to visit one day to try out authentic Turkish food!'}
            link={''}
            image_link={'https://sultanahmet.ca/wp-content/uploads/2022/12/Traditional-Turkish-cuisine.jpg'}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;