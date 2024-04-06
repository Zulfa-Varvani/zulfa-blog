import Recipe from '../components/Recipe';
import '../constants/styles.css';

function Kenya () {
    return(
        <div className='App'>
            <div className="banner-container" style={{ backgroundImage: `url('https://cdn.britannica.com/61/153461-050-3C2B54D7/Acacia-trees-Taita-Hills-Kenya.jpg')` }}>
                <div className="title">Kenya</div>
                <p className="source-subtitle">Source: Britannica</p>
            </div>
            <div className='content'>
                <div className='about-me'>
                    <div className="image-container-kenya">
                        <img src="./public/kenya_food.jpg" alt="Kenya" />
                    </div>
                    <div className='text-container'>
                        <h2>Karibu Kenya 👋🏽</h2>
                        <p>
                        Kenya, a country in East Africa famed for its scenic landscapes and vast wildlife preserves. Its Indian Ocean coast provided historically important ports by which goods from Arabian and Asian traders have entered the continent for many centuries. Along that coast, which holds some of the finest beaches in Africa, are predominantly Muslim Swahili cities such as Mombasa, a historic centre that has contributed much to the musical and culinary heritage of the country. Inland are populous highlands famed for both their tea plantations, an economic staple during the British colonial era, and their variety of animal species, including lions, elephants, cheetahs, rhinoceroses, and hippopotamuses. Kenya’s western provinces, marked by lakes and rivers, are forested, while a small portion of the north is dessert and semidessert. The country’s diverse wildlife and panoramic geography draw large numbers of European and North American visitors, and tourism is an important contributor to Kenya’s economy.
                        </p>
                        <p>
                        Kenyan cooking reflects British, Arab, and Indian influences. Foods common throughout Kenya include ugali, a mush made from corn (maize) and often served with such greens as spinach and kale. Chapati, a fried pitalike bread of Indian origin, is served with vegetables and stew; rice is also popular. Seafood and freshwater fish are eaten in most parts of the country and provide an important source of protein. Many vegetable stews are flavoured with coconut, spices, and chilies. Although meat traditionally is not eaten every day or is eaten only in small quantities, grilled meat and all-you-can-eat buffets specializing in game, or “bush meat,” are popular. Many people utilize shambas (vegetable gardens) to supplement purchased foods. In areas inhabited by the Kikuyu, irio, a stew of peas, corn, and potatoes, is common.
                        </p>
                    </div>
                </div>
                <div className='recipes'>
                    <h2>Recipes</h2>
                    <Recipe
                        title={'Ugali'}
                        description={'Ugali, also known as posho, nsima, and other names, is a type of corn meal made from maize or corn flour in several countries in Africa. In Kenya, ugali was first popularized in the coastal region in the 19th century when Portuguese traders introduced maize to the country. Large-scale maize farming soon followed, initially for export, but later largely for sustaining the workforce. Today, ugali is the most popular meal made and consumed by Kenyan households.'}
                        ingredients={[
                            '1 cup finely ground white cornmeal',
                            '2 cups water',
                            'Salt to taste'
                        ]}
                        steps={[
                            'Heat the water in a pan with medium high heat.',
                            'Once it comes to a boil, slowly whisk in the cornmeal. Turn the heat down to low and stir constantly.',
                            'Make sure to smash out any lumps. Cook for 8 minutes.'
                        ]}
                        imageUrl='https://upload.wikimedia.org/wikipedia/commons/4/48/Ugali_%26_Sukuma_Wiki.jpg'
                        source={"Wikipedia"}
                    />
                    <Recipe
                        title={'Matobosha'}
                        description={'Matobosha is a sweet dish originating from the coasts of Kenya and Tanzania. During the holy month of Ramadhan,  Matobosha dessert is prepared on a daily basis almost in every Swahili house hold and more so the well to do families. The dessert is shared with dear friends, close neighbors, and among the family members.  The dessert is usually served after the main dish (Futari). Matobosha is among the chosen few desserts and snacks prepared by the grooms or bridegroom families (either of the two) and sent as a gift (Bembe) especially during the holy month of Ramadhan and send to the grooms or bride grooms family.  During the wedding ceremony matobosha is prepared and served to the newlyweds, special guests, and among members of the family.'}
                        ingredients={[
                            'For dough',
                            '- 1 cup rice flour',
                            '- 2 cups water',
                            'For syrup',
                            '- 4 cups water',
                            '- 5-6 tablespoons coconut powder',
                            '- 1 teaspoon cardamom powder',
                            '- 1/2 cup sugar (you can add more if you like it sweeter)',
                            '- 1 tablespoon rice flour'
                        ]}
                        steps={[
                            'Put the water in a pot on medium heat and bring it to warm then add the rice flour and stir continuously till well mixed . It should form a soft but well combined dough. Reduce the heat completely and let it stand for about 5 minutes to cook the dough thoroughly.',
                            'Let it cool while still covered (I usually use a tea towel and the lid to cover it, it prevents condensation).',
                            'When it’s nice and cooler to the touch, divide the dough into 4 balls and taking one ball at a time make small marble sized balls about 1/2 inch  (make sure the rest of the dough is well covered to avoid drying out).',
                            'Using your fore finger press it into the ball to make a bowl shape. Continue with the rest of the dough balls.',
                            'In the meanwhile, prepare the syrup. On medium heat bring the syrup ingredients to a light boil .',
                            'Add the rice dough bowls (the red blood cell shape balls) in it one at a time, make sure you don’t stir at this point.',
                            'Let it heat up nicely then using a wooden spoon stir very gently.',
                            'Bring it to a light boil, switch off and let it stand for about half hour to cool.',
                            'Pour in a nice serving bowl and serve.'
                        ]}
                        imageUrl='https://bakeithalal.ca/wp-content/uploads/2018/06/IMG_0781.jpg'
                        source={"Bake It Halal"}
                    />
                </div>
            </div>
        </div>
    );
}

export default Kenya;