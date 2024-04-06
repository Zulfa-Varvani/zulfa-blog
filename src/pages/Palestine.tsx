import Recipe from '../components/Recipe';
import '../constants/styles.css';

function Palestine () {
    return(
        <div className='App'>
            <div className="banner-container" style={{ backgroundImage: `url('https://www.palestineremembered.com/Jaffa/Jaffa/Picture120593.webp')` }}>
                <div className="title">Palestine</div>
                <p className="source-subtitle">Source: Palestine Remembered</p>
            </div>
            <div className='content'>
                <div className='about-me'>
                    <div className="image-container-kenya">
                        <img src="https://www.palestineremembered.com/Jaffa/Jaffa/Picture105463.jpg" alt="Palestine" />
                        <p className="image-source-start">Source: Palestine Remembered</p>
                    </div>
                    <div className='text-container'>
                        <h2>مرحبا بكم في فلسطين 💖</h2>
                        <p>
                            Palestine, situated at the crossroads of civilizations, has a rich and complex history spanning millennia. From the Canaanite age, when it was inhabited by various Semitic peoples, to today's geopolitical landscape, Palestine has been a land of cultural diversity and historical significance. In antiquity, it saw the rise and fall of empires, including the Egyptians, Assyrians, Babylonians, Persians, Greeks, and Romans, each leaving their mark on the region. The birth of monotheistic religions occurred here, with Judaism, Christianity, and Islam all claiming sacred sites within its borders. Throughout history, Palestine has been a land of contention, with various powers vying for control. The modern era has been marked by waves of immigration, colonialism, and conflict, culminating in the establishment of the state of Israel in 1948 and subsequent Palestinian displacement and dispossession.
                        </p>
                        <p>
                            Cuisine in Palestine reflects its diverse cultural heritage and geographical location. Palestinian cuisine is characterized by a variety of flavors, influenced by Mediterranean, Arab, and Levantine culinary traditions. Staple foods include hummus, waraq enab (stuffed grape leaves), and rumaniyyeh, alongside a rich array of grilled meats and fish, aromatic rice dishes, and freshly baked bread. Olive oil, a symbol of Palestinian agriculture, features prominently in many dishes, while herbs and spices like sumac, za'atar, and cumin add depth to the cuisine. Traditional desserts such as baklava and knafeh offer a sweet conclusion to meals. Despite the challenges of conflict and displacement, Palestinian cuisine continues to thrive, serving as a testament to the resilience and cultural richness of the Palestinian people.
                        </p>
                    </div>
                </div>
                <div className='recipes'>
                    <h2>Recipes</h2>
                    <Recipe
                        title={'Maqloubeh'}
                        description={'Maqloubeh is a very popular dish in Palestine and many Arab countries including Iraq, Jordan, and Syria. This well-known dish is prepared differently in each household, but being a layered dish made of rice, vegetable, and meat is what remains consistent across all versions. Maqloubeh translates to "upside down" in reference to the way the order of ingredients are layered in the pot versus how they look when the pot is flipped. According to popular accounts, when Saladin, the founder of the Ayyubid dynasty, conquered Jerusalem in 1187, Jerusalemites served the dish to him and his soldiers. In the local stories, it was Saladin who renamed what was then called bazenjaniyah as maqluba. The dish finds mention in the 13th-century Kitab Al-Tabikh (Book of Dishes) written in the Abbasid period by Muhammad al-Baghdadi and was used by Palestinian activists to mobilize people to join protests at the Aqsa mosque in the Israeli-occupied East Jerusalem.'}
                        ingredients={[
                            '2-3 cups Basmati rice',
                            '2 teaspoon 7 spices or two teaspoons connamon poweder',
                            '1 1/2 - 2 teaspoon salt (add more salt as you add more rice)',
                            '1 teaspoon blank pepper',
                            '1 pound meat pieces (lamb)',
                            '2 large tomatoes sliced',
                            '1 large eggplant, or 2 italian eggplants sliced (horizontal or vertical)',
                            'A handful of chopped parsley',
                            'A handful of fried onion',
                            'Can add 1 chopped cauliflaur if desired',
                            '2 tablespoons olive oil',
                            'A handful of sliced nuts (almonds or peanuts)',
                            '1 large potato sliced'
                        ]}
                        steps={[
                            'Heat some oil in a saucepan and fry all the vegetables until browned and set aside',
                            'In a pot, place the lamb with 1 teaspoon salt, fried onion, and water to cover. Boil and cook until soft and remove floating gunk',
                            'For the rice, ensure the rice is washed and dried, then add the 7 spices/cinnamon powder, salt, olive oil, and black pepper. Mix well',
                            'Once the meat is ready, set aside and keep the stock/water aside',
                            'In the same pot, start placing the vegetables, starting with the tomato and potato (one layer). Add the sliced eggplant. If you cut the eggplant vertically (long slices), then arrange them on the side of the pot.',
                            'Sprinkle a handful of rice and arrange most meat pieces',
                            'Add the remaining layer of vegetables and last few meat pieces',
                            'Add the majority of rice over th layers of vegetables and meat and ensure it is all covered.',
                            'Add the meat stock to the pot with additional water as needed. Make sure to have the water covering the ingredients until 1 inch of the water is above the rice',
                            'It is recommended to use a pot such that the full dish is contained (never use a pot too big or too small). Put the heat at medium/low and do not stir',
                            'The dish should take about 30-40 minutes to thoroughly cook. Once the water has mostly been absorbed, put the heat at low and cover the rice. This will allow it to cook and fluff up',
                            'After 15 minutes, place a large flat plat on top of the pot and flip, making sure it will not leak',
                            'Pat the bottom of the pot down to make the rice and vegetables at the bottom with the rest of the dish. Leave it like this for about 5-10 minutes before flipping out the pot',
                            'Hopefully, you are successful in flipping it! Sprinkle the parsley and nuts, and serve with yoghurt/labneh'
                        ]}
                        imageUrl='https://feelgoodfoodie.net/wp-content/uploads/2023/12/Maqluba-TIMG.jpg'
                        source={'Feel Good Foodie'}
                    />
                    <Recipe
                        title={'Mutabbel'}
                        description={'The origin of the word Mutabbal is Arabic  tabala which means to add additional flavors. Mutabal is a very important cultural dish originating from the Levantine regions (Palestine, Syria, Lebanon, and Jordan) and varies across the Levant. Today, it is enjoyed across the globe and is very closely related to its more popular cousin, Baba ganoush. The base is fire roasted eggplant (aubergine). It is inherently vegan. If you love Baba ganoush, you will love this aubergine dip. Mutabbel is enjoyed best with pomegranate seeds or pomegranate sauce sprinkled on top, and should be spicy. I enjoy eating it with warm, fluffy Arabic bread'}
                        ingredients={[
                            '2 large eggplants',
                            'Olive oil (for drizzling and in the mixture)',
                            '1 garlic clove or 1 heaped teaspoon garlic paste',
                            '2-3 tablespoons tahini',
                            '1 tablespoon Greek yoghurt',
                            'Juice of 1 lemon, add more as you like',
                            '1 teaspoon salt',
                            '1/2 teaspoon black pepper',
                            '2 green or red chillies finely chopped',
                            'Handful of pomegranate seeds or pomegranate sauce for sprinkling',
                            'Sumac for sprinkling',
                            '1 teaspoon cumin (if desired)',
                            'Handful of chopped parsley'
                        ]}
                        steps={[
                            'Slice the eggplants in half and place the skin side up halves on a baking tray.',
                            'Poke holes with a fork on the skin of the eggplants and drizzle with olive oil.',
                            'Place the tray in the oven and bake/broil until the eggplant has been charred (takes about 30 minutes on broil)',
                            'Put the garlic, tahini, yoghurt, salt, pepper, chillies, (cumin if using), and lemon juice in a blender. Place also the insides of the eggplant scooped (do not put the skin of the eggplant)',
                            'Mix the mixture in the blender until a smooth, thick paste is made',
                            'Place the mixture in an appropriately sized bowl and smoothen the top. Make a slight circular trench in the bowl and sprinkle the garnishes on top (olive oil, pomegrante, parsley, and sumac)',
                            'Serve as a breakfast with bread or as a starter dip!'
                        ]}
                        imageUrl='https://urbanfarmandkitchen.com/wp-content/uploads/2022/08/mutabal-roasted-eggplant-dip-plate.jpg'
                        source={'Urban Farm And Kitchen'}
                    />
                </div>
            </div>
        </div>
    );
}

export default Palestine;