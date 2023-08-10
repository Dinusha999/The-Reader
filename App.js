import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ImageBackground} from 'react-native';
import Logo from './assets/logoo.png';
import Logo1 from './assets/hp.png';
import Logo2 from './assets/Ft.png';
import Logo3 from './assets/Fbwft.png';
import Logo4 from './assets/gt.png';
import Logo5 from './assets/vbs.png';
import Logo6 from './assets/mom.png';
import Logo7 from './assets/fsog.png';
import Logo8 from './assets/vsu.png';
import Logo9 from './assets/sh.png';
import Logo10 from './assets/ff.png';


function HomeScreen ({ navigation }) {
  return (
    <ImageBackground source={require('./assets/back3.png')}>
     
    <View style={styles.container}> 
      
    <View style = {styles.Home}>
    <Image style = {styles.Img} source={Logo}/> 

      <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('Login')}  style  = {styles.button1text} > LOGIN </Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.button2 } >
        <Text onPress={() => navigation.navigate('Register')}  style  = {styles.button1text} > REGISTER </Text>
      </TouchableOpacity>
      <Text>   </Text>

      <TouchableOpacity >
        <Text onPress={() => navigation.navigate('Select Your Language')} > සිංහල / English / தமிழ் </Text>
      </TouchableOpacity>

      <Text style = {styles.foot2}>Version 2.2.0 | © Copyright @ 2022 The Readers |</Text>
        
    </View>
    </View>
    </ImageBackground>
  );
} 

function LogScreen ({ navigation }) {
  return (
    <ImageBackground source={require('./assets/back3.png')}>
    <View style={styles.container}>
      
    <View style = {styles.Home}>
    <Image style = {styles.Img} source={Logo}/> 

      <TextInput style = {styles.input} placeholder = "Username"/>
      <TextInput style = {styles.input} placeholder = "Password" secureTextEntry = {true}/>

      <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('Dashboard')}  style  = {styles.button1text} > LOGIN </Text>
      </TouchableOpacity>

      <text> □ I am not a Robot</text>

      <TouchableOpacity style = {styles.button3 } >
        <Text onPress={() => navigation.navigate('Forgot Password')}  style  = {styles.button3text} > FORGOT PASSWORD </Text>
      </TouchableOpacity>

      <Text style = {styles.foot2}>Version 2.2.0 | © Copyright @ 2022 The Readers |</Text>
        
    </View>
    </View>
    </ImageBackground>
  );
}

function LoginScreen({ navigation }) {
  
  return (
    <ImageBackground source={require('./assets/back3.png')}>
    <View style={styles.container}>
    <View style = {styles.Second}>
    <Image style = {styles.Img} source={Logo}/>  
    
    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('Search')}  style  = {styles.button1text} > SEARCH </Text>
    </TouchableOpacity> 

    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('All Books')}  style  = {styles.button1text} > ALL BOOKS </Text>
    </TouchableOpacity> 

    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('Categories')}  style  = {styles.button1text} > CATEGORIES </Text>
    </TouchableOpacity> 

    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('Settings')}  style  = {styles.button1text} > SETTINGS </Text>
    </TouchableOpacity> 

    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('Notifications')}  style  = {styles.button1text} > NOTIFICATIONS </Text>
    </TouchableOpacity> 

    <Text style = {styles.foot2}>Version 2.2.0 | © Copyright @ 2022 The Readers |</Text>    
    
    </View>
    </View>
    </ImageBackground>
  ); 
}

function SearchScreen({ navigation }) {
  
  return (
    <ImageBackground source={require('./assets/back3.png')}>
    <View style={styles.container}>
    <View style = {styles.Second}>
    <Image style = {styles.Img} source={Logo}/>  

    <Text>  </Text>
    <Text>Oops! This system is under Maintenance! Try Again Later!</Text>
    <Text>  </Text>
    

    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('Dashboard')}  style  = {styles.button1text} > GO BACK </Text>
    </TouchableOpacity> 


    <Text style = {styles.foot2}>Version 2.2.0 | © Copyright @ 2022 The Readers |</Text>    
    
    </View>
    </View>
    </ImageBackground>
  ); 
}

function SettingsScreen({ navigation }) {
  
  return (
    <ImageBackground source={require('./assets/back3.png')}>
    <View style={styles.container}>
    <View style = {styles.Second}>
    <Image style = {styles.Img} source={Logo}/>  

    <Text></Text>

    <Text style = {styles.booktopic }> SETTINGS</Text>

    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('')}  style  = {styles.button1text} > UPDATE PROFILE </Text>
    </TouchableOpacity> 

    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('')}  style  = {styles.button1text} > GET LATEST VERSION </Text>
    </TouchableOpacity> 

    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('')}  style  = {styles.button1text} > RATE US </Text>
    </TouchableOpacity> 

    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('The Readers')}  style  = {styles.button1text} > DELETE ACCOUNT </Text>
    </TouchableOpacity> 

    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('Login')}  style  = {styles.button1text} > LOG OUT </Text>
    </TouchableOpacity>   

    <Text style = {styles.foot2}>Version 2.2.0 | © Copyright @ 2022 The Readers |</Text>    
    
    </View>
    </View>
    </ImageBackground>
  ); 
}

function NotificationsScreen({ navigation }) {
  
  return (
    <ImageBackground source={require('./assets/back3.png')}>
    <View style={styles.container}>
    <View style = {styles.Second}>
    <Image style = {styles.Img} source={Logo}/>  

    <Text>  </Text>
    <Text style = {styles.booktopic }> NOTIFICATIONS</Text>
    <Text>  </Text>
    <Text>No new notifications</Text>
    <Text>  </Text>
    <Text>  </Text>
    <Text>  </Text>  
    <Text>  </Text>
    <Text>  </Text>
    <Text>  </Text> 

    <Text style = {styles.foot2}>Version 2.2.0 | © Copyright @ 2022 The Readers |</Text>    
    
    </View>
    </View>
    </ImageBackground>
  ); 
}

function CategoryScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/back3.png')}>
    <View style={styles.container}>
    <View style = {styles.Second}>
    <Image style = {styles.Img} source={Logo}/>  
    
    <TouchableOpacity style = {styles.buttoncat } >
        <Text onPress={() => navigation.navigate('Novals')}  style  = {styles.buttoncattext} > NOVELS </Text>
    </TouchableOpacity> 

    <TouchableOpacity style = {styles.buttoncat } >
        <Text onPress={() => navigation.navigate('Short Stories')}  style  = {styles.buttoncattext} > SHORT STORIES </Text>
    </TouchableOpacity> 

    <TouchableOpacity style = {styles.buttoncat } >
        <Text onPress={() => navigation.navigate('Drama')}  style  = {styles.buttoncattext} > DRAMA </Text>
    </TouchableOpacity> 

    <TouchableOpacity style = {styles.buttoncat } >
        <Text onPress={() => navigation.navigate('Poems')}  style  = {styles.buttoncattext} > POEMS </Text>
    </TouchableOpacity> 

    <TouchableOpacity style = {styles.buttoncat } >
        <Text onPress={() => navigation.navigate('Literature')}  style  = {styles.buttoncattext} > LITERATURE </Text>
    </TouchableOpacity> 

    <Text style = {styles.foot2}>Version 2.2.0 | © Copyright @ 2022 The Readers |</Text>    
    
    </View>
    </View>
    </ImageBackground>
  ); 
}

function NovalsScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/back3.png')}>
    <View style={styles.container}>
    <View style = {styles.Second}>    

    <TouchableOpacity style = {styles.buttonbooks } >
        <Text onPress={() => navigation.navigate('Harry Potter')}  style  = {styles.buttonbookstext} > Harry Potter and the Deathly Hellows </Text>
    </TouchableOpacity> 

    <TouchableOpacity style = {styles.buttonbooks } >
        <Text onPress={() => navigation.navigate('Amma')}  style  = {styles.buttonbookstext} > Amma </Text>
    </TouchableOpacity> 

    <TouchableOpacity style = {styles.buttonbooks } >
        <Text onPress={() => navigation.navigate('Famous Five')}  style  = {styles.buttonbookstext} > Famous Five </Text>
    </TouchableOpacity>

    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('Categories')}  style  = {styles.button1text} > GO BACK </Text>
    </TouchableOpacity>

    <Text style = {styles.foot2}>Version 2.2.0 | © Copyright @ 2022 The Readers |</Text>    
    
    </View>
    </View>
    </ImageBackground>
  ); 
}

function SstoriesScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/back3.png')}>
    <View style={styles.container}>
    <View style = {styles.Second}>

    <TouchableOpacity style = {styles.buttonbooks } >
        <Text onPress={() => navigation.navigate('First Teacher')}  style  = {styles.buttonbookstext} > First Teacher </Text>
    </TouchableOpacity>

    <TouchableOpacity style = {styles.buttonbooks } >
        <Text onPress={() => navigation.navigate('Sherlock Holmes')}  style  = {styles.buttonbookstext} > Sherlock Holmes Hounds of the Baskevil </Text>
    </TouchableOpacity>

    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('Categories')}  style  = {styles.button1text} > GO BACK </Text>
    </TouchableOpacity>


    <Text style = {styles.foot2}>Version 2.2.0 | © Copyright @ 2022 The Readers |</Text>    
    
    </View>
    </View>
    </ImageBackground>
  ); 
}

function DramaScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/back3.png')}>
    <View style={styles.container}>
    <View style = {styles.Second}>

    <TouchableOpacity style = {styles.buttonbooks } >
        <Text onPress={() => navigation.navigate('Fantastic Beasts')}  style  = {styles.buttonbookstext} > Fantastic beats and where to find them </Text>
    </TouchableOpacity> 

    <TouchableOpacity style = {styles.buttonbooks } >
        <Text onPress={() => navigation.navigate('Fifty Shades of Gray')}  style  = {styles.buttonbookstext} > Fiftay Shades of gray </Text>
    </TouchableOpacity>

    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('Categories')}  style  = {styles.button1text} > GO BACK </Text>
    </TouchableOpacity>

    <Text style = {styles.foot2}>Version 2.2.0 | © Copyright @ 2022 The Readers |</Text>    
    
    </View>
    </View>
    </ImageBackground>
  ); 
}


function PoemsScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/back3.png')}>
    <View style={styles.container}>
    <View style = {styles.Second}>

    <TouchableOpacity style = {styles.buttonbooks } >
        <Text onPress={() => navigation.navigate('Guththila Kawya')}  style  = {styles.buttonbookstext} > Guththila Kawya </Text>
    </TouchableOpacity>

    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('Categories')}  style  = {styles.button1text} > GO BACK </Text>
    </TouchableOpacity>

    <Text style = {styles.foot2}>Version 2.2.0 | © Copyright @ 2022 The Readers |</Text>    
    
    </View>
    </View>
    </ImageBackground>
  ); 
}

function LiteratureScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/back3.png')}>
    <View style={styles.container}>
    <View style = {styles.Second}>

    <TouchableOpacity style = {styles.buttonbooks } >
        <Text onPress={() => navigation.navigate('Village by the Sea')}  style  = {styles.buttonbookstext} > Village by the sea </Text>
    </TouchableOpacity>

    <TouchableOpacity style = {styles.buttonbooks } >
        <Text onPress={() => navigation.navigate('Virgin soil upturn')}  style  = {styles.buttonbookstext} > Vergin soil upturn </Text>
    </TouchableOpacity>

    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('Categories')}  style  = {styles.button1text} > GO BACK </Text>
    </TouchableOpacity>

    <Text style = {styles.foot2}>Version 2.2.0 | © Copyright @ 2022 The Readers |</Text>    
    
    </View>
    </View>
    </ImageBackground>
  ); 
}


function BookScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/back3.png')}>
    <View style={styles.container}>
    <View style = {styles.Second}> 
    
    <TouchableOpacity style = {styles.buttonbooks } >
        <Text onPress={() => navigation.navigate('Harry Potter')}  style  = {styles.buttonbookstext} > Harry Potter and the Deathly Hellows </Text>
    </TouchableOpacity> 

    <TouchableOpacity style = {styles.buttonbooks } >
        <Text onPress={() => navigation.navigate('First Teacher')}  style  = {styles.buttonbookstext} > First Teacher </Text>
    </TouchableOpacity> 

    <TouchableOpacity style = {styles.buttonbooks } >
        <Text onPress={() => navigation.navigate('Fantastic Beasts')}  style  = {styles.buttonbookstext} > Fantastic Beats And Where To Find Them </Text>
    </TouchableOpacity> 

    <TouchableOpacity style = {styles.buttonbooks } >
        <Text onPress={() => navigation.navigate('Guththila Kawya')}  style  = {styles.buttonbookstext} > Guththila Kavya </Text>
    </TouchableOpacity> 

    <TouchableOpacity style = {styles.buttonbooks } >
        <Text onPress={() => navigation.navigate('Village by the Sea')}  style  = {styles.buttonbookstext} > Village By The Sea </Text>
    </TouchableOpacity>

    <TouchableOpacity style = {styles.buttonbooks } >
        <Text onPress={() => navigation.navigate('Amma')}  style  = {styles.buttonbookstext} > The Mother </Text>
    </TouchableOpacity> 

    <TouchableOpacity style = {styles.buttonbooks } >
        <Text onPress={() => navigation.navigate('Fifty Shades of Gray')}  style  = {styles.buttonbookstext} > Fiftay Shades Of Gray </Text>
    </TouchableOpacity>

    <TouchableOpacity style = {styles.buttonbooks } >
        <Text onPress={() => navigation.navigate('Virgin soil upturn')}  style  = {styles.buttonbookstext} > Virgin Soil Upturn </Text>
    </TouchableOpacity>

    <TouchableOpacity style = {styles.buttonbooks } >
        <Text onPress={() => navigation.navigate('Sherlock Holmes')}  style  = {styles.buttonbookstext} > Sherlock Holmes The Hound of the Baskervilles </Text>
    </TouchableOpacity>

    <TouchableOpacity style = {styles.buttonbooks } >
        <Text onPress={() => navigation.navigate('Famous Five')}  style  = {styles.buttonbookstext} > Famous Five </Text>
    </TouchableOpacity>

    <Text style = {styles.foot2}>Version 2.2.0 | © Copyright @ 2022 The Readers |</Text>    
    
    </View>
    </View>
    </ImageBackground>
  ); 
}
 
function HpScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/back3.png')}>
    <View style={styles.container}>
    <View style = {styles.Second}>
    <Image style = {styles.Imgbanner} source={Logo1}/>

    <Text style = {styles.booktopic }> Harry Potter and the Deathly Hallows</Text>
    
    <Text style = {styles.bookContent }>4.6/5 · Goodreads</Text>
    <Text style = {styles.bookContent }>96% liked this book</Text>
    <Text style = {styles.bookContent }>Harry Potter and the Deathly Hallows is a fantasy novel written by British author J. K. Rowling and the seventh and 
      final novel of the main Harry Potter series. It was released on 14 July 2007 in the United Kingdom by Bloomsbury
      Publishing, in the United States by Scholastic, and in Canada by Raincoast Books</Text>
    <Text style = {styles.bookContent }>Originally published: July 14, 2007</Text>
    <Text style = {styles.bookContent }>Author: J. K. Rowling</Text>
    <Text style = {styles.bookContent }>Characters: Harry Potter, Professor Albus Dumbledore, MORE</Text>
    <Text style = {styles.bookContent }>Genres: Novel, Children's literature, Fantasy Fiction, Young adult fiction, Mystery, Thriller, Magical Realism, Bildungsroman</Text>
    <Text style = {styles.bookContent }>Illustrators: Mary GrandPré, Jason Cockcroft</Text>
    <Text style = {styles.bookContent }>Awards: Andre Norton Award</Text>
    <Text style = {styles.bookContent }>Adaptations: Harry Potter and the Deathly Hallows: Part 1 (2010), MORE</Text>

    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('All Books')}  style  = {styles.button1text} > GO BACK </Text>
    </TouchableOpacity>

    <Text style = {styles.foot2}>Version 2.2.0 | © Copyright @ 2022 The Readers |</Text>    

    </View>
    </View>
    </ImageBackground>
  );
}

function FteacherScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/back3.png')}>
    <View style={styles.container}>
    <View style = {styles.Second}>
      
    <Text style = {styles.booktopic }> First Teacher</Text>
    <Image style = {styles.Imgbanner} source={Logo2}/>
    <Text style = {styles.bookContent }>The action takes place in the years from 1924 all the way to the early 
    1950s in the Kurkureu village of the Kyrgyz Soviet Socialist Republic, which is now Kyrgyzstan.

    The Russian Civil War ended not so long ago. Young Komsomol member and a former Red Army soldier, Dyuyshen, 
    travels to a remote village where he takes up his post as the new teacher for the children of the village. 
    His enthusiasm to bring new ideas immediately faces a centuries-old tradition of life in Central Asia. The 
    former soldier tries to improve the children's literacy but faces opposition from the Moslem parents who, 
    moreover, look unfavourably on the idea of a girl joining the school. Dyuyshen meets Altynai, a 15-year-old 
    illiterate girl who has a burning desire to study, but her aunt sells her to a powerful and wealthy chieftain. 
    The school is burned down. The film ends with the promise of it being rebuilt using a centuries-old tree which
    had been a source of pride to the villagers.</Text>
    <Text style = {styles.bookContent }>4.2/5 · Goodreads</Text>
    <Text style = {styles.bookContent }>92% liked this book</Text>
    <Text style = {styles.bookContent }>Originally published: 1962</Text>
    <Text style = {styles.bookContent }>Author: Chinghiz Aitmatov</Text>
    <Text style = {styles.bookContent }>Adaptations: The First Teacher (1965)</Text>
    
    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('All Books')}  style  = {styles.button1text} > GO BACK </Text>
    </TouchableOpacity>

    <Text style = {styles.foot2}>Version 2.2.0 | © Copyright @ 2022 The Readers |</Text>    

    </View>
    </View>
    </ImageBackground>
  );
}

function FbeastsScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/back3.png')}>
    <View style={styles.container}>
    <View style = {styles.Second}>

    <Text style = {styles.booktopic }> Fantastic Beasts And Where To Find Them</Text>
    <Image style = {styles.Img} source={Logo3}/> 

    <Text style = {styles.bookContent }>Book by J. K. Rowling</Text>
    <Text style = {styles.bookContent }>4/5 Goodreads</Text>
    <Text style = {styles.bookContent }>4/5 Common Sense Media</Text>
    <Text style = {styles.bookContent }>5/5 Toppsta</Text>
    <Text style = {styles.bookContent }>95% liked this book</Text>
    <Text style = {styles.bookContent }>Fantastic Beasts and Where to Find Them is a 2001 guide book written 
    by British author J. K. Rowling about the magical creatures in the Harry Potter universe</Text>
    <Text style = {styles.bookContent }>Originally published: March 2001</Text>
    <Text style = {styles.bookContent }>Author: J. K. Rowling</Text>
    <Text style = {styles.bookContent }>Series: Harry Potter</Text>
    <Text style = {styles.bookContent }>Pages: 128</Text>
    <Text style = {styles.bookContent }>Genre: Fantasy</Text>
    <Text style = {styles.bookContent }>Cover artist: Richard Horne</Text>

    
    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('All Books')}  style  = {styles.button1text} > GO BACK </Text>
    </TouchableOpacity>

    <Text style = {styles.foot2}>Version 2.2.0 | © Copyright @ 2022 The Readers |</Text>    

    </View>
    </View>
    </ImageBackground>
  );
}

function GkawyaScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/back3.png')}>
    <View style={styles.container}>
    <View style = {styles.Second}>
    
    <Text style = {styles.booktopic }> Guththila Kawya</Text>
    <Image style = {styles.Img} source={Logo4}/> 

    <Text style = {styles.bookContent }>Author	Weththewe Thero (Sinhala: වෑත්තෑවේ හිමි)</Text>
    <Text style = {styles.bookContent }>Country	Sri Lanka</Text>
    <Text style = {styles.bookContent }>Language	Sinhala</Text>
    <Text style = {styles.bookContent }>Genre	Poetry</Text>
    <Text style = {styles.bookContent }>Published	16th Century</Text>
    <Text style = {styles.bookContent }>Guththila Kawya (Sinhala: ගුත්තිල කාව්‍ය, English: Guttila Kāvya) is a book 
    of poetry written in the period of the Kingdom of Kotte (1552-1551) by Weththewe Thero.

    The book is based on a story of previous soul of Gautama Buddha mentioned on Guththila Jataka in Jataka 
    tales of Gautama Buddha. Guththila kawya contains over 511 poems. The book was written by Weththewe thero as 
    a invitation and extolment of a minister called Jayapala, of the Kotte Royal Council (King: VI Parakumba).
    The book has been written in the era of Kingdom of Kotte (AD 1552-1551). Poems are explaining a 
    great competition which happened between Guththila and Musila. Guththila kawya's poems have 
    been inscribed with the same rhymes (Sinhala: එළිසමය), alliteration words (Sinhala: අනුප්‍රාසය) and various genres. 
    From the first to 115th poems have been written according to Gee Viritha. Guttila Kawya has around 5 
    metres. Viz. Mahamegha Viritha, Savisimath Viritha, Solos math Viritha, Dolos math Viritha and Mahapiyum Viritha.

    Book has been mentioned how the competition day was held, Exaggeration has been used for this book without 
    harming to the included information of original sources from Guththila Jataka to give a great taste for the 
    book readers</Text>
    
    
    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('All Books')}  style  = {styles.button1text} > GO BACK </Text>
    </TouchableOpacity>

    <Text style = {styles.foot2}>Version 2.2.0 | © Copyright @ 2022 The Readers |</Text>    

    </View>
    </View>
    </ImageBackground>
  );
}

function VseaScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/back3.png')}>
    <View style={styles.container}>
    <View style = {styles.Second}>
    
    <Text style = {styles.booktopic }> Village By The Sea</Text>
    <Image style = {styles.Img} source={Logo5}/> 

    <Text style = {styles.bookContent }>Novel by Anita Desai</Text>
    <Text style = {styles.bookContent }>3.6/5 Goodreads</Text>
    <Text style = {styles.bookContent }>5/5 Jeya Book Centre</Text>
    <Text style = {styles.bookContent }>91% liked this book</Text>
    <Text style = {styles.bookContent }>The Village by the Sea: an Indian family story is a novel for young 
    people by the Indian writer Anita Desai, published in London by Heinemann in 1982. It is based on the 
    poverty, hardships and sorrow faced by a small rural, community in India.</Text>
    <Text style = {styles.bookContent }>Originally published: 1982</Text>
    <Text style = {styles.bookContent }>Author: Anita Desai</Text>
    <Text style = {styles.bookContent }>Pages: 156 pp (first edition)</Text>
    <Text style = {styles.bookContent }>Genre: Realistic young-adult novel</Text>
    <Text style = {styles.bookContent }>Characters: Mr. Panwallah, Hari, Bela, Jagu, Kamal, Lila</Text>
    
    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('All Books')}  style  = {styles.button1text} > GO BACK </Text>
    </TouchableOpacity>

    <Text style = {styles.foot2}>Version 2.2.0 | © Copyright @ 2022 The Readers |</Text>    

    </View>
    </View>
    </ImageBackground>
  );
}

function AmmaScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/back3.png')}>
    <View style={styles.container}>
    <View style = {styles.Second}>

    <Text style = {styles.booktopic }> The Mother </Text>
    <Image style = {styles.Img} source={Logo6}/> 

    <Text style = {styles.bookContent }>Novel by Maxim Gorky</Text>
    <Text style = {styles.bookContent }>4/5 Goodreads</Text>
    <Text style = {styles.bookContent }>4.7/5 Flipkart</Text>
    <Text style = {styles.bookContent }> 87% liked this book </Text>
    <Text style = {styles.bookContent }>Mother is a novel written by Maxim Gorky in 1906 about revolutionary 
    factory workers. It was first published, in English, in Appleton's Magazine in 1906, then in Russian 
    in 1907. The work was translated into many languages, and was made into a number of films. </Text>
    <Text style = {styles.bookContent }>Originally published: 1906</Text>
    <Text style = {styles.bookContent }>Author: Maxim Gorky</Text>
    <Text style = {styles.bookContent }>Language: Russian</Text>
    <Text style = {styles.bookContent }>Characters: The Mother, Pavel Vlassov, Vlasov, Pavel's friend, Isaik Gorbov</Text>
    
    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('All Books')}  style  = {styles.button1text} > GO BACK </Text>
    </TouchableOpacity>

    <Text style = {styles.foot2}>Version 2.2.0 | © Copyright @ 2022 The Readers |</Text>    

    </View>
    </View>
    </ImageBackground>
  );
}

function FiftyshadesScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/back3.png')}>
    <View style={styles.container}>
    <View style = {styles.Second}>
    
    <Text style = {styles.booktopic }> Fifty Shades of Gray</Text>
    <Image style = {styles.Img} source={Logo7}/> 

    <Text style = {styles.bookContent }>Novel by E. L. James</Text>
    <Text style = {styles.bookContent }>89% liked this book</Text>
    <Text style = {styles.bookContent }>Fifty Shades of Grey is a 2011 erotic romance novel by British author 
    E. L. James. It became the first instalment in the Fifty Shades novel series that follows the deepening 
    relationship between a college graduate, Anastasia Steele, and a young business magnate, Christian Grey.</Text>
    <Text style = {styles.bookContent }>Originally published: May 25, 2011</Text>
    <Text style = {styles.bookContent }>Author: E. L. James</Text>
    <Text style = {styles.bookContent }>Pages: 514</Text>
    <Text style = {styles.bookContent }>Series: Fifty Shades trilogy</Text>
    <Text style = {styles.bookContent }>Genres: Novel, Romance novel, Fiction, Erotic romance novel</Text>
    
    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('All Books')}  style  = {styles.button1text} > GO BACK </Text>
    </TouchableOpacity>

    <Text style = {styles.foot2}>Version 2.2.0 | © Copyright @ 2022 The Readers |</Text>    

    </View>
    </View>
    </ImageBackground>
  );
}

function VerginsoilScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/back3.png')}>
    <View style={styles.container}>
    <View style = {styles.Second}>

    <Text style = {styles.booktopic }> Virgin Soil upturn</Text>
    <Image style = {styles.Img} source={Logo8}/> 

    <Text style = {styles.bookContent }>Book by Mikhail Sholokhov</Text>
    <Text style = {styles.bookContent }>4/5 · Goodreads</Text>
    <Text style = {styles.bookContent }>73% liked this book</Text>
    <Text style = {styles.bookContent }>Mikhail Sholokhov is rightly considered both in his own country and 
    abroad the foremost Soviet novelist of his generation. Born in 1905, in a working Cossack family, Sholokhov?s 
    most impressionable years were those of the Russian Revolution and Civil War, which he had described with 
    penetrating insight.</Text>
    <Text style = {styles.bookContent }>Originally published: 1932</Text>
    <Text style = {styles.bookContent }>Author: Mikhail Sholokhov</Text>
    
    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('All Books')}  style  = {styles.button1text} > GO BACK </Text>
    </TouchableOpacity>

    <Text style = {styles.foot2}>Version 2.2.0 | © Copyright @ 2022 The Readers |</Text>    

    </View>
    </View>
    </ImageBackground>
  );
}

function SholmesScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/back3.png')}>
    <View style={styles.container}>
    <View style = {styles.Second}>

    <Text style = {styles.booktopic }> Sherlock Holmes The Hound of the Baskervilles</Text>
    <Image style = {styles.Img} source={Logo9}/> 

    <Text style = {styles.bookContent }>Novel by Arthur Conan Doyle</Text>
    <Text style = {styles.bookContent }>87% liked this book</Text>
    <Text style = {styles.bookContent }>The Hound of the Baskervilles is the third of the four crime novels 
    written by Sir Arthur Conan Doyle featuring the detective Sherlock Holmes.</Text>
    <Text style = {styles.bookContent }>Originally published: April 1902</Text>
    <Text style = {styles.bookContent }>Author: Arthur Conan Doyle</Text>
    <Text style = {styles.bookContent }>Text: The Hound of the Baskervilles at Wikisource</Text>
    <Text style = {styles.bookContent }>Genre: Detective fiction</Text>
    <Text style = {styles.bookContent }>Series: Sherlock Holmes</Text>
    <Text style = {styles.bookContent }>Cover artist: Alfred Garth Jones</Text>
    <Text style = {styles.bookContent }>Adaptations: The Hound of the Baskervilles (1981), MORE</Text>
    
    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('All Books')}  style  = {styles.button1text} > GO BACK </Text>
    </TouchableOpacity>

    <Text style = {styles.foot2}>Version 2.2.0 | © Copyright @ 2022 The Readers |</Text>    

    </View>
    </View>
    </ImageBackground>
  );
}

function FfiveScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/back3.png')}>
    <View style={styles.container}>
    <View style = {styles.Second}>

    <Text style = {styles.booktopic }> Famous Five</Text>
    <Image style = {styles.Img} source={Logo10}/> 

    <Text style = {styles.bookContent }>Novel series</Text>
    <Text style = {styles.bookContent }>Author: Enid Blyton</Text>
    <Text style = {styles.bookContent }>Country: United Kingdom</Text>
    <Text style = {styles.bookContent }>No. of books: 21</Text>
    <Text style = {styles.bookContent }>The Famous Five is a series of children's adventure novels 
    and short stories written by English author Enid Blyton. The first book, Five on a Treasure 
    Island, was published in 1942. The novels feature the adventures of a group of young children – 
    Julian, Dick, Anne, Georgina and her dog Timmy.</Text>
    <Text style = {styles.bookContent }>Author: Enid Blyton</Text>
    <Text style = {styles.bookContent }>Genre: Children's literature; Mystery; Adventure</Text>
    <Text style = {styles.bookContent }>Characters: Julian, George, Anne, Dick, Timmy</Text>
    <Text style = {styles.bookContent }>Adaptations: Fünf Freunde (2012), The Famous Five (1978), MORE</Text>
    <Text style = {styles.bookContent }>Author: Enid Blyton</Text>
    <Text style = {styles.bookContent }>Country: United Kingdom</Text>
    
    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('All Books')}  style  = {styles.button1text} > GO BACK </Text>
    </TouchableOpacity>

    <Text style = {styles.foot2}>Version 2.2.0 | © Copyright @ 2022 The Readers |</Text>    

    </View>
    </View>
    </ImageBackground>
  );
}

function RegScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/back3.png')}>
    <View style={styles.container}>
    <View style = {styles.Second}>
    <Image style = {styles.Img} source={Logo}/>  
    <TextInput style = {styles.input} placeholder = "Enter your full name"/>
    <TextInput style = {styles.input} placeholder = "Your prefered username"/>
    <TextInput style = {styles.input} placeholder = "E - mail"/>
    <TextInput style = {styles.input} placeholder = "Telephone Number"/>
    <TextInput style = {styles.input} placeholder = "Address"/>
    <TextInput style = {styles.input} placeholder = "Password" secureTextEntry = {true}/>

    <TouchableOpacity style = {styles.button2 } >
        <Text onPress={() => navigation.navigate('Registration Succesful')}  style  = {styles.button1text} > REGISTER NOW </Text>
    </TouchableOpacity>
    
    <Text>Already have an account?</Text>
    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('Login')}  style  = {styles.button1text} > CLICK HERE </Text>
    </TouchableOpacity>

    <Text style = {styles.foot2}>Version 2.2.0 | © Copyright @ 2022 The Readers |</Text>    

    </View>
    </View>
    </ImageBackground>
  );
}

function FPScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/back3.png')}>
    <View style={styles.container}>
    <View style = {styles.Second}>
    <Image style = {styles.Img} source={Logo}/>  
    <TextInput style = {styles.input} placeholder = "Username"/>
    <TextInput style = {styles.input} placeholder = "E - mail"/>
    <TextInput style = {styles.input} placeholder = "OTP" secureTextEntry = {true} />
    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('Password Reset Succesful')}  style  = {styles.button1text} > RESET PASSWORD </Text>
    </TouchableOpacity>  

    <Text style = {styles.foot2}>Version 2.2.0 | © Copyright @ 2022 The Readers |</Text>    
    
    </View>
    </View>
    </ImageBackground>
  );
}

function RegsuccesfulScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/back3.png')}>
    <View style={styles.container}>
    <View style = {styles.Second}>
    <Image style = {styles.Img} source={Logo}/>  
    <Text style = {styles.reset }>You'are Succesfully Registered !</Text>
    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('Login')}  style  = {styles.button1text} > LOGIN </Text>
    </TouchableOpacity>  
    
    <Text style = {styles.foot2}>Version 2.2.0 | © Copyright @ 2022 The Readers |</Text>    
    
    </View>
    </View>
    </ImageBackground>
  );
}

function ResetScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/back3.png')}>
    <View style={styles.container}>
    <View style = {styles.Second}>
    <Image style = {styles.Img} source={Logo}/>  
    <Text style = {styles.reset }>Your password has been reset succesfully !</Text>
    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('Login')}  style  = {styles.button1text} > GO TO LOGIN </Text>
    </TouchableOpacity> 

    <Text style = {styles.foot2}>Version 2.2.0 | © Copyright @ 2022 The Readers |</Text>     
    
    </View>
    </View>
    </ImageBackground>
  );
}

function LanguageScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/back3.png')}>
    <View style={styles.container}>
    <View style = {styles.Second}>
    <Image style = {styles.Img} source={Logo}/>  
    <Text style = {styles.langua }>Select your prefered Language</Text>
    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('Login')}  style  = {styles.button1text} > සිංහල </Text>
    </TouchableOpacity> 
    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('Login')}  style  = {styles.button1text} > English </Text>
    </TouchableOpacity>
    <TouchableOpacity style = {styles.button1 } >
        <Text onPress={() => navigation.navigate('Login')}  style  = {styles.button1text} > தமிழ் </Text>
    </TouchableOpacity>

    <Text style = {styles.foot2}>Version 2.2.0 | © Copyright @ 2022 The Readers |</Text>     
    
    </View>
    </View>
    </ImageBackground>
  );
}

const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="The Readers" component={HomeScreen} />
        <Stack.Screen name="Login" component={LogScreen} />
        <Stack.Screen name="Dashboard" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegScreen} />
        <Stack.Screen name="Forgot Password" component={FPScreen} />
        <Stack.Screen name="Registration Succesful" component={RegsuccesfulScreen} />
        <Stack.Screen name="Password Reset Succesful" component={ResetScreen} />
        <Stack.Screen name="Select Your Language" component={LanguageScreen} />
        <Stack.Screen name="Categories" component={CategoryScreen} />
        <Stack.Screen name="All Books" component={BookScreen} />
        <Stack.Screen name="Harry Potter" component={HpScreen} />
        <Stack.Screen name="First Teacher" component={FteacherScreen} />
        <Stack.Screen name="Fantastic Beasts" component={FbeastsScreen} />
        <Stack.Screen name="Guththila Kawya" component={GkawyaScreen} />
        <Stack.Screen name="Village by the Sea" component={VseaScreen} />
        <Stack.Screen name="Amma" component={AmmaScreen} />
        <Stack.Screen name="Fifty Shades of Gray" component={FiftyshadesScreen} />
        <Stack.Screen name="Virgin soil upturn" component={VerginsoilScreen} />
        <Stack.Screen name="Sherlock Holmes" component={SholmesScreen} />
        <Stack.Screen name="Famous Five" component={FfiveScreen} />
        <Stack.Screen name="Novals" component={NovalsScreen} />
        <Stack.Screen name="Short Stories" component={SstoriesScreen} />
        <Stack.Screen name="Drama" component={DramaScreen} />
        <Stack.Screen name="Poems" component={PoemsScreen} />
        <Stack.Screen name="Literature" component={LiteratureScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: 50,  
    padding:20,  
  },

  Home:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },

  Second:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button1: {
    height: 30,
    width: 170, 
    backgroundColor: '#001ac2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30, 
    paddingTop:20,
    paddingBottom:20, 
    margin:5, 
  },

  buttoncat: {
    height: 30,
    width: 250, 
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30, 
    paddingTop:20,
    paddingBottom:20, 
    margin:5,      
  },

  button2: {
    height: 30,
    width: 170, 
    backgroundColor: '#001ac2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30, 
    paddingTop:20,
    paddingBottom:20, 
    margin:5,  
  }, 

  button3: {
    height: 20,
    width: 120, 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30, 
    paddingTop:15,
    paddingBottom:20,  
    margin:5,       
  },

  button1text: {
    fontSize: 14,
    textAlign: 'justify',
    color: 'white',
    fontWeight:'bold',
  }, 

  buttoncattext: {
    fontSize: 15,
    textAlign: 'justify',
    color: 'white',
    fontWeight:'bold',
  }, 

  buttonbookstext: {
    fontSize: 18,
    textAlign: 'justify',
    color: 'white',
    fontWeight:'bold',
  },

  buttonbooks: {
    height: 30,
    width: 500, 
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30, 
    paddingTop:20,
    paddingBottom:20, 
    margin:5,      
  },

  button3text: {
    fontSize: 12,
    textAlign: 'justify',
    color: 'black',
  }, 

  input: {
    width: "90%",
    height: 50,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 30, 
    marginBottom:10,
    opacity:0.75,  
  },

  Img: {
    width:200,
    height:230,
    margin:30,
  },

  Imgbanner: {
    width:200,
    height:350,
    margin:20,
  },

  item: {
    fontSize: 20,
    padding: 10,
    height: 40,
    backgroundColor: 'lightblue',
    marginBottom: 10,
  },

  sectionHeader: {
    paddingTop: 2,
    paddingLeft:10,
    padding:10,
    paddingBottom:2,
    fontSize:22,
    fontWeight:'bold',
    backgroundColor: 'lightgray',
  },
  foot1:{
    paddingTop:15,
    color:'red',
  },
  foot2:{
    padding:25,
    fontSize:10,
    color:'white',
  },
  langua:{
    fontSize:25,
    fontWeight: 'bold',
    paddingBottom:10,
  },
  reset:{
    fontSize:25,
    fontWeight: 'bold',
    paddingBottom:10,
  },
  booktopic:{
    fontSize:25,
    fontWeight: 'bold',
    paddingBottom:20,
  },
  bookContent:{
    fontSize:18,
    paddingBottom:10,
    fontStyle:'Italic',
  }

});
