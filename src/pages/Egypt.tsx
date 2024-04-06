import Recipe from '../components/Recipe';
import '../constants/styles.css';

function Egypt () {
    return(
        <div className='App'>
            <div className="banner-container" style={{ backgroundImage: `url('https://images.adsttc.com/media/images/64a2/cdae/cb9c/464f/a63a/9764/large_jpg/cairo-architecture-city-guide-exploring-the-unique-architectural-blend-of-historical-and-contemporary-in-egypts-bustling-capital_23.jpg?1688391095')` }}>
                <div className="title">Egypt</div>
                <p className="source-subtitle">Source: Arch Daily</p>
            </div>
            <div className='content'>
                <div className='about-me'>
                    <div className="image-container-kenya">
                        <img src="https://zulfa-varvani.github.io/zulfa-blog/public/egypt_pic.jpg" alt="Egypt" />
                    </div>
                    <div className='text-container'>
                        <h2>أهلا وسهلا إلى مصر 🧆</h2>
                        <p>
                            Egypt, a land steeped in history and mystery, has captivated the imagination of people for millennia. From the ancient wonders of the pyramids to the bustling streets of modern Cairo, Egypt's story is one of resilience and cultural richness. Throughout its long history, Egypt has been home to some of the world's most iconic civilizations, including the Pharaohs, Greeks, Romans, and Arabs, each leaving their indelible mark on the country's landscape and culture.
                        </p>
                        <p>
                            One of the most enticing aspects of Egypt is its diverse and flavorful cuisine, which reflects its rich cultural heritage. Traditional Egyptian dishes like koshari, a hearty mix of rice, lentils, and pasta topped with spicy tomato sauce and crispy fried onions, offer a tantalizing glimpse into the country's culinary traditions. Other popular dishes include ful medames, a savory stew of fava beans seasoned with garlic, lemon, and olive oil, and molokhia, a nutritious soup made from the leaves of the molokhia plant. Whether savoring a fragrant bowl of koshari in a bustling Cairo cafe or indulging in a leisurely meal of grilled kebabs and mezzes by the banks of the Nile, Egypt's cuisine is sure to delight food enthusiasts from around the world. Today, Egypt continues to enchant visitors with its timeless wonders and vibrant culture, inviting them to explore its ancient past and embrace its modern vitality.
                        </p>
                    </div>
                </div>
                <div className='recipes'>
                    <h2>Recipes</h2>
                    <Recipe
                        title={'Koshari'}
                        description={"Despite the fact that this vegetarian meal is often considered Egypt’s national dish, it is not actually Egyptian in origin. The dish originated almost 5,000 kilometers away in India and was referred to as khichri (or khichdi) in Hindi. Khichri is a one-pot rice and lentil dish associated with good fortune and prosperity. It is believed that the dish made its long journey from India when Indians accompanied British soldiers to Egypt in the early 1900s following the first world war. Some accounts believe that the pasta added to the dish was influenced by a minority of Italians who lived in Egypt at the time. However, other accounts suggest a more ancient historical origin. Whatever the origin, there's a reason why it's Egypt's national dish!"}
                        ingredients={[
                            "For the Crispy Onion Topping:",
                            "- 1 large onion, sliced into thin rings",
                            "- Salt",
                            "- ⅓ cup all-purpose flour",
                            "- ½ cup cooking oil",
                            "For Tomato Sauce:",
                            "- Cooking oil",
                            "- 1 small onion, grated",
                            "- 4 garlic cloves, minced",
                            "- 1 tsp ground coriander",
                            "- ½ -1 teaspoon crushed red pepper flakes (optional)",
                            "- 1 can (28-oz) tomato sauce",
                            "- Salt and pepper",
                            "- 1-2 tablespoon distilled white vinegar",
                            "For Koshari:",
                            "- 1 ½ cup brown lentils, picked over and well-rinsed",
                            "- 1 ½ cup medium-grain rice, rinsed, soaked in water for 15 minutes, drained",
                            "- ½ tsp each salt and pepper",
                            "- ½ tsp coriander",
                            "- 2 cups elbow pasta",
                            "- Cooking oil",
                            "- Water",
                            "- 1 can (15-oz) chickpeas, rinsed, drained and warmed"
                          ]}
                        steps={[
                            "Make the crispy onion topping.",
                            "- Sprinkle the onion rings with salt, then toss them in the flour to coat. Shake off excess flour.",
                            "- In a large skillet, heat the cooking oil over medium-high heat, cook the onion rings, stirring often, until they turn a nice caramelized brown. Onions must be crispy, but not burned (15-20 minutes).",
                            "Make the Tomato Sauce.",
                            "- In a saucepan, heat 1 tablespoon cooking oil. Add the grated onion, cook on medium-high until the onion turns a translucent gold (do not brown). Now add the garlic, coriander, and red pepper flakes, if using, and saute briefly until fragrant (30-45 seconds more).",
                            "- Stir in tomato sauce and pinch of salt. Bring to a simmer and cook until the sauce thickens (15 minutes or so).",
                            "- Stir in the distilled white vinegar, and turn the heat to low. Cover and keep warm until ready to serve.",
                            "Make the Koshari",
                            "- Cook the lentils. Bring lentils and 4 cups of water to a boil in a medium pot or saucepan over high heat. Reduce the heat to low and cook until lentils are just tender (15-17 minutes). Drain from water and season with a little salt. (Note: when the lentils are ready, they should not be fully cooked. They should be only par-cooked and still have a bite to them as they need to finish cooking with the rice).",
                            "- Now, for the rice. Drain the rice from its soaking water. Combine the par-cooked lentils and the rice in the saucepan over medium-high heat with 1 tablespoon cooking oil, salt, pepper, and coriander. Cook for 3 minutes, stirring regularly. Add warm water to cover the rice and lentil mixture by about 1 ½ inches (you'll probably use about 3 cups of water here). Bring to a boil; the water should reduce a bit. Now cover and cook until all the liquid has been absorbed and both the rice and lentils are well cooked through (about 20 minutes).  Keep covered and undisturbed for 5 minutes or so.",
                            "- Now make the pasta. While the rice and lentils are cooking, make the pasta according to package instructions by adding the elbow pasta to boiling water with a dash of salt and a little oil. Cook until the pasta is al dente. Drain.",
                            "- Cover the chickpeas and warm in the microwave briefly before serving.",
                            "Put it All Together!",
                            "- To serve, fluff the rice and lentils with a fork and transfer to a serving platter. Top with the elbow pasta and ½ of the tomato sauce, then the chickpeas, and finally ½ of the crispy onions for garnish. Serve, passing the remaining sauce and crispy onions separately."
                        ]}
                        imageUrl='https://media.timeout.com/images/102086717/image.jpg'
                        source={'TimeOut'}
                    />
                    <Recipe
                        title={'Besbousa'}
                        description={"The origins of besbousa date back to the revani cake of Turkish cuisine. It is a classic cake from the days of the Ottoman Empire. Over the years, it gained enormous popularity in the Middle East, and it appears to be the number one dessert in Egypt. Its name is derived from the Arabic verb “bas” meaning “to blend,” given that it is prepared by blending flour with margarine or butter. The semolina cake, besbousa, is often prepared unstuffed or with no filling. Throughout the Middle East, each country or region has its own variation of Besbousa, but I find Egyptian besbousa to be the best!"}
                        ingredients={[
                            "1 ⅔ cup (306g) Farina.",
                            "½ cup ghee.",
                            "1 Tablespoon honey.",
                            "½ cup (116g) sugar.",
                            "½ cup (97g) plain yogurt.",
                            "½ Tablespoon (6g) baking powder.",
                            "½ cup (45g) unsweetened coconut flakes finely shredded.",
                            "0.5 Tablespoon tahini. plus 1 Tablespoon ghee to brush the bottom.",
                            "For the syrup:",
                            "- 1 cup sugar.",
                            "- 1 cup water.",
                            "- 1 teaspoon lemon juice.",
                            "- 2 Tablespoon honey.",
                            "- ½ teaspoon vanilla extract",
                            "- Nuts for garnishing"
                        ]}
                        steps={[
                            "Heat oven to 350F.",
                            "Make the cake:",
                            "- In a deep bowl, combine farina, baking powder, sugar and coconut then mix well.",
                            "- Melt the ghee in the microwave or stove top then dissolve the honey in it.",
                            "- Add the ghee mixture to the bowl of dry ingredients and mix well to combine.",
                            "- Add the yogurt and mix, just until everything is well incorporated.",
                            "- Brush a round 12 inch baking sheet with the tahini and spread the basbousa mixture evenly.",
                            "- Spread nuts on top evenly to decorate.",
                            "- Bake in the middle of your oven until edges start to brown, this took about 10 minutes. Then move the basbousa up to the higher shelf and let it continue cooking until golden brown will take anywhere from 15 to 20 minutes.",
                            "Make the syrup:",
                            "- When you move the basbousa to the upper shelf start making the syrup.",
                            "- In a small saucepan over medium heat, combine syrup ingredients and bring to a boil.",
                            "- When it boils, reduce heat and simmer for 10 minutes.",
                            "- Turn heat off and keep the syrup warm.",
                            "- When basbousa is done, turn off your oven and take it out.",
                            "- Pour the syrup evenly and cover the basbousa immediately with foil. Return to the TURNED OFF oven for 5-10 minutes.",
                            "- Take it out, cut and enjoy"
                        ]}
                        imageUrl='https://silkroadrecipes.com/wp-content/uploads/2021/04/Egyptian-Basbousa-Cake-square-500x500.jpg'
                        source={'Silk Road Recipes'}
                    />
                </div>
            </div>
        </div>
    );
}

export default Egypt;