const inputField = document.getElementById("enter")
const wordField = document.getElementById("text")
const header = document.getElementById("header")
const results = document.getElementById("results")

let currentWord = 0
let correctKeys = 0
let testLength = 10
let extraKeys = 0
let testStart = 0
let testStarted = false
let mode = "scripture"
let passage = ''

let wordBank = `the
of
to
and
a
in
is
it
you
that
he
was
for
on
are
with
as
I
his
they
be
at
one
have
this
from
or
had
by
hot
word
but
what
some
we
can
out
other
were
all
there
when
up
use
your
how
said
an
each
she
which
do
their
time
if
will
way
about
many
then
them
write
would
like
so
these
her
long
make
thing
see
him
two
has
look
more
day
could
go
come
did
number
sound
no
most
people
my
over
know
water
than
call
first
who
may
down
side
been
now
find
any
new
work
part
take
get
place
made
live
where
after
back
little
only
round
man
year
came
show
every
good
me
give
our
under
name
very
through
just
form
sentence
great
think
say
help
low
line
differ
turn
cause
much
mean
before
move
right
boy
old
too
same
tell
does
set
three
want
air
well
also
play
small
end
put
home
read
hand
port
large
spell
add
even
land
here
must
big
high
such
follow
act
why
ask
men
change
went
light
kind
off
need
house
picture
try
us
again
animal
point
mother
world
near
build
self
earth
father
head
stand
own
page
should
country
found
answer
school
grow
study
still
learn
plant
cover
food
sun
four
between
state
keep
eye
never
last
let
thought
city
tree
cross
farm
hard
start
might
story
saw
far
sea
draw
left
late
run
don't
while
press
close
night
real
life
few
north
open
seem
together
next
white
children
begin
got
walk
example
ease
paper
group
always
music
those
both
mark
often
letter
until
mile
river
car
feet
care
second
book
carry
took
science
eat
room
friend
began
idea
fish
mountain
stop
once
base
hear
horse
cut
sure
watch
color
face
wood
main
enough
plain
girl
usual
young
ready
above
ever
red
list
though
feel
talk
bird
soon
body
dog
family
direct
pose
leave
song
measure
door
product
black
short
numeral
class
wind
question
happen
complete
ship
area
half
rock
order
fire
south
problem
piece
told
knew
pass
since
top
whole
king
space
heard
best
hour
better
true
during
hundred
five
remember
step
early
hold
west
ground
interest
reach
fast
verb
sing
listen
six
table
travel
less
morning
ten
simple
several
vowel
toward
war
lay
against
pattern
slow
center
love
person
money
serve
appear
road
map
rain
rule
govern
pull
cold
notice
voice
unit
power
town
fine
certain
fly
fall
lead
cry
dark
machine
note
wait
plan
figure
star
box
noun
field
rest
correct
able
pound
done
beauty
drive
stood
contain
front
teach
week
final
gave
green
oh
quick
develop
ocean
warm
free
minute
strong
special
mind
behind
clear
tail
produce
fact
street
inch
multiply
nothing
course
stay
wheel
full
force
blue
object
decide
surface
deep
moon
island
foot
system
busy
test
record
boat
common
gold
possible
plane
stead
dry
wonder
laugh
thousand
ago
ran
check
game
shape
equate
miss
brought
heat
snow
tire
bring
yes
distant
fill
east
paint
language
among
grand
ball
yet
wave
drop
heart
am
present
heavy
dance
engine
position
arm
wide
sail
material
size
vary
settle
speak
weight
general
ice
matter
circle
pair
include
divide
syllable
felt
perhaps
pick
sudden
count
square
reason
length
represent
art
subject
region
energy
hunt
probable
bed
brother
egg
ride
cell
believe
fraction
forest
sit
race
window
store
summer
train
sleep
prove
lone
leg
exercise
wall
catch
mount
wish
sky
board
joy
winter
sat
written
wild
instrument
kept
glass
grass
cow
job
edge
sign
visit
past
soft
fun
bright
gas
weather
month
million
bear
finish
happy
hope
flower
clothe
strange
gone
jump
baby
eight
village
meet
root
buy
raise
solve
metal
whether
push
seven
paragraph
third
shall
held
hair
describe
cook
floor
either
result
burn
hill
safe
cat
century
consider
type
law
bit
coast
copy
phrase
silent
tall
sand
soil
roll
temperature
finger
industry
value
fight
lie
beat
excite
natural
view
sense
ear
else
quite
broke
case
middle
kill
son
lake
moment
scale
loud
spring
observe
child
straight
consonant
nation
dictionary
milk
speed
method
organ
pay
age
section
dress
cloud
surprise
quiet
stone
tiny
climb
cool
design
poor
lot
experiment
bottom
key
iron
single
stick
flat
twenty
skin
smile
crease
hole
trade
melody
trip
office
receive
row
mouth
exact
symbol
die
least
trouble
shout
except
wrote
seed
tone
join
suggest
clean
break
lady
yard
rise
bad
blow
oil
blood
touch
grew
cent
mix
team
wire
cost
lost
brown
wear
garden
equal
sent
choose
fell
fit
flow
fair
bank
collect
save
control
decimal
gentle
woman
captain
practice
separate
difficult
doctor
please
protect
noon
whose
locate
ring
character
insect
caught
period
indicate
radio
spoke
atom
human
history
effect
electric
expect
crop
modern
element
hit
student
corner
party
supply
bone
rail
imagine
provide
agree
thus
capital
won't
chair
danger
fruit
rich
thick
soldier
process
operate
guess
necessary
sharp
wing
create
neighbor
wash
bat
rather
crowd
corn
compare
poem
string
bell
depend
meat
rub
tube
famous
dollar
stream
fear
sight
thin
triangle
planet
hurry
chief
colony
clock
mine
tie
enter
major
fresh
search
send
yellow
gun
allow
print
dead
spot
desert
suit
current
lift
rose
continue
block
chart
hat
sell
success
company
subtract
event
particular
deal
swim
term
opposite
wife
shoe
shoulder
spread
arrange
camp
invent
cotton
born
determine
quart
nine
truck
noise
level
chance
gather
shop
stretch
throw
shine
property
column
molecule
select
wrong
gray
repeat
require
broad
prepare
salt
nose
plural
anger
claim
continent
oxygen
sugar
death
pretty
skill
women
season
solution
magnet
silver
thank
branch
match
suffix
especially
fig
afraid
huge
sister
steel
discuss
forward
similar
guide
experience
score
apple
bought
led
pitch
coat
mass
card
band
rope
slip
win
dream
evening
condition
feed
tool
total
basic
smell
valley
nor
double
seat
arrive
master
track
parent
shore
division
sheet
substance
favor
connect
post
spend
chord
fat
glad
original
share
station
dad
bread
charge
proper
bar
offer
segment
slave
duck
instant
market
degree
populate
chick
dear
enemy
reply
drink
occur
support
speech
nature
range
steam
motion
path
liquid
log
meant
quotient
teeth
shell
neck`.split('\n')

let verseBank = `John 3:16 | For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. |
Romans 10:9 | If you declare with your mouth, 'Jesus is Lord,' and believe in your heart that God raised him from the dead, you will be saved. |
Acts 4:12 | Salvation is found in no one else, for there is no other name under heaven given to mankind by which we must be saved. |
Titus 3:5 | He saved us, not because of righteous things we had done, but because of his mercy. He saved us through the washing of rebirth and renewal by the Holy Spirit. |
1 John 5:11-12 | And this is the testimony: God has given us eternal life, and this life is in his Son. Whoever has the Son has life; whoever does not have the Son of God does not have life. |
John 5:24 | Very truly I tell you, whoever hears my word and believes him who sent me has eternal life and will not be judged but has crossed over from death to life. |
2 Corinthians 5:21 | God made him who had no sin to be sin for us, so that in him we might become the righteousness of God. |
Isaiah 53:6 | We all, like sheep, have gone astray, each of us has turned to our own way; and the Lord has laid on him the iniquity of us all. |
1 John 1:9 | If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness. |
Acts 3:19 | Repent, then, and turn to God, so that your sins may be wiped out, that times of refreshing may come from the Lord. |
Psalm 51:10 | Create in me a pure heart, O God, and renew a steadfast spirit within me. |
Luke 15:7 | I tell you that in the same way there will be more rejoicing in heaven over one sinner who repents than over ninety-nine righteous persons who do not need to repent. |
Proverbs 28:13 | Whoever conceals their sins does not prosper, but the one who confesses and renounces them finds mercy. |
John 14:6 | Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.' |
Colossians 1:15-17 | The Son is the image of the invisible God, the firstborn over all creation. For in him all things were created: things in heaven and on earth, visible and invisible, whether thrones or powers or rulers or authorities; all things have been created through him and for him. |
Matthew 1:21 | She will give birth to a son, and you are to give him the name Jesus, because he will save his people from their sins. |
Revelation 1:8 | I am the Alpha and the Omega, says the Lord God, who is, and who was, and who is to come, the Almighty. |
Hebrews 11:1 | Now faith is confidence in what we hope for and assurance about what we do not see. |
Proverbs 3:5-6 | Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight. |
2 Corinthians 5:7 | For we live by faith, not by sight. |
Psalm 37:5 | Commit your way to the Lord; trust in him and he will do this. |
Mark 11:24 | Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours. |
Matthew 28:19-20 | Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age. |
Romans 1:16 | For I am not ashamed of the gospel, because it is the power of God that brings salvation to everyone who believes: first to the Jew, then to the Gentile. |
Isaiah 6:8 | Then I heard the voice of the Lord saying, 'Whom shall I send? And who will go for us?' And I said, 'Here am I. Send me!' |
1 Peter 3:15 | But in your hearts revere Christ as Lord. Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. But do this with gentleness and respect. |
Romans 5:8 | But God demonstrates his own love for us in this: While we were still sinners, Christ died for us. |
Lamentations 3:22-23 | Because of the Lord’s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness. |
Psalm 103:11-12 | For as high as the heavens are above the earth, so great is his love for those who fear him; as far as the east is from the west, so far has he removed our transgressions from us. |
Micah 7:18-19 | Who is a God like you, who pardons sin and forgives the transgression of the remnant of his inheritance? You do not stay angry forever but delight to show mercy. You will again have compassion on us; you will tread our sins underfoot and hurl all our iniquities into the depths of the sea. |
2 Corinthians 5:17 | Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here! |
Galatians 2:20 | I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me. |
Ezekiel 36:26 | I will give you a new heart and put a new spirit in you; I will remove from you your heart of stone and give you a heart of flesh. |
Philippians 4:13 | I can do all this through him who gives me strength. |
Isaiah 40:31 | But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint. |
Psalm 23:1-4 | The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul. He guides me along the right paths for his name’s sake. Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me. |
Romans 8:38-39 | For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord. |
Joshua 1:9 | Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go. |
Hebrews 10:23 | Let us hold unswervingly to the hope we profess, for he who promised is faithful. |
John 11:25-26 | Jesus said to her, 'I am the resurrection and the life. The one who believes in me will live, even though they die; and whoever lives by believing in me will never die. Do you believe this?' |
1 Thessalonians 5:16-18 | Rejoice always, pray continually, give thanks in all circumstances; for this is God’s will for you in Christ Jesus. |
James 1:5 | If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you. |
Psalm 46:1 | God is our refuge and strength, an ever-present help in trouble. |
John 8:36 | So if the Son sets you free, you will be free indeed. |
Philippians 4:6-7 | Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus. |
Romans 3:23 | For all have sinned and fall short of the glory of God. |
Isaiah 64:6 | All of us have become like one who is unclean, and all our righteous acts are like filthy rags; we all shrivel up like a leaf, and like the wind our sins sweep us away. |
Jeremiah 17:9 | The heart is deceitful above all things and beyond cure. Who can understand it? |
Ecclesiastes 7:20 | Indeed, there is no one on earth who is righteous, no one who does what is right and never sins. |
Psalm 51:5 | Surely I was sinful at birth, sinful from the time my mother conceived me. |
Isaiah 53:5 | But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed. |
Ephesians 2:1-3 | As for you, you were dead in your transgressions and sins, in which you used to live when you followed the ways of this world... Like the rest, we were by nature deserving of wrath. |
Romans 7:18 | For I know that good itself does not dwell in me, that is, in my sinful nature. For I have the desire to do what is good, but I cannot carry it out. |
James 4:17 | If anyone, then, knows the good they ought to do and doesn’t do it, it is sin for them. |
Romans 6:23 | For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord. |
Genesis 6:5 | The Lord saw how great the wickedness of the human race had become on the earth, and that every inclination of the thoughts of the human heart was only evil all the time. |
Psalm 14:2-3 | The Lord looks down from heaven on all mankind to see if there are any who understand, any who seek God. All have turned away, all have become corrupt; there is no one who does good, not even one. |
Hosea 14:1 | Return, Israel, to the Lord your God. Your sins have been your downfall! |
Matthew 9:13 | But go and learn what this means: ‘I desire mercy, not sacrifice.’ For I have not come to call the righteous, but sinners. |
1 John 3:4 | Everyone who sins breaks the law; in fact, sin is lawlessness. |
Galatians 3:22 | But Scripture has locked up everything under the control of sin, so that what was promised, being given through faith in Jesus Christ, might be given to those who believe. |
Isaiah 1:18 | Come now, let us settle the matter,” says the Lord. “Though your sins are like scarlet, they shall be as white as snow; though they are red as crimson, they shall be like wool. |
Luke 5:8 | When Simon Peter saw this, he fell at Jesus’ knees and said, 'Go away from me, Lord; I am a sinful man!' |
Romans 8:7 | The mind governed by the flesh is hostile to God; it does not submit to God’s law, nor can it do so. |
John 16:8 | When he comes, he will prove the world to be in the wrong about sin and righteousness and judgment. |
Isaiah 59:2 | But your iniquities have separated you from your God; your sins have hidden his face from you, so that he will not hear. |
Ezra 9:6 | I am too ashamed and disgraced, my God, to lift up my face to you, because our sins are higher than our heads and our guilt has reached to the heavens. |
Psalm 32:5 | Then I acknowledged my sin to you and did not cover up my iniquity. I said, 'I will confess my transgressions to the Lord.' And you forgave the guilt of my sin. |
Matthew 5:14-16 | You are the light of the world. A town built on a hill cannot be hidden. Neither do people light a lamp and put it under a bowl... let your light shine before others, that they may see your good deeds and glorify your Father in heaven. |
Mark 16:15 | He said to them, 'Go into all the world and preach the gospel to all creation.' |
Acts 1:8 | But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth. |
Romans 10:14-15 | How, then, can they call on the one they have not believed in? And how can they believe in the one of whom they have not heard?... As it is written: 'How beautiful are the feet of those who bring good news!' |
Isaiah 52:7 | How beautiful on the mountains are the feet of those who bring good news, who proclaim peace, who bring good tidings, who proclaim salvation, who say to Zion, 'Your God reigns!' |
2 Timothy 2:2 | And the things you have heard me say in the presence of many witnesses entrust to reliable people who will also be qualified to teach others. |
Psalm 96:3 | Declare his glory among the nations, his marvelous deeds among all peoples. |
1 Corinthians 9:22-23 | To the weak I became weak, to win the weak. I have become all things to all people so that by all possible means I might save some. I do all this for the sake of the gospel. |
John 20:21 | Again Jesus said, 'Peace be with you! As the Father has sent me, I am sending you.' |
Daniel 12:3 | Those who are wise will shine like the brightness of the heavens, and those who lead many to righteousness, like the stars for ever and ever. |
Luke 24:47 | And repentance for the forgiveness of sins will be preached in his name to all nations, beginning at Jerusalem. |
Matthew 24:14 | And this gospel of the kingdom will be preached in the whole world as a testimony to all nations, and then the end will come. |
Psalm 67:2 | So that your ways may be known on earth, your salvation among all nations. |
Isaiah 49:6 | He says: 'It is too small a thing for you to be my servant to restore the tribes of Jacob... I will also make you a light for the Gentiles, that my salvation may reach to the ends of the earth.' |
Acts 13:47 | For this is what the Lord has commanded us: 'I have made you a light for the Gentiles, that you may bring salvation to the ends of the earth.' |
2 Corinthians 4:5 | For what we preach is not ourselves, but Jesus Christ as Lord, and ourselves as your servants for Jesus’ sake. |
Luke 14:23 | Then the master told his servant, 'Go out to the roads and country lanes and compel them to come in, so that my house will be full.'`.split('|')

let generatedWords = []

function setWordField() {
    // Reset class for word spans and input field
    results.classList.add("invisible")
    inputField.classList.remove("currentlyIncorrect")
    for (let i = 0; i < testLength; i++) {
        wordField.children[i].className = "";
    };
    wordField.children[0].classList.add("active");
    currentWord = 0;
    correctKeys = 0;
    extraKeys = 0;
    testStarted = false;
    // Generate words from word bank
    if (mode == "words") {
        generatedWords = [];
        for (let i = 0; i < testLength; i++) {
            word = wordBank[Math.floor(Math.random() * wordBank.length)];
            generatedWords.push(word);
            wordField.children[i].textContent = word + ' ';
        };
    } else {
        generatedWords = passage;
        for (let i = 0; i < testLength; i++) {
            wordField.children[i].textContent = generatedWords[i] + ' ';
        }
    }
};

function checkWord() {
    // Get typed word
    word = inputField.value;
    // If input field isn't blank
    if (word != "") {
        // Check if word was typed correctly
        if (word == generatedWords[currentWord]) {
            wordField.children[currentWord].classList.add("correct");
        } else {
            wordField.children[currentWord].classList.add("incorrect");
        }
        // Increment correct keys variable
        let i = 0
        equal = true
        while (i < generatedWords[currentWord].length && equal) {
            if (generatedWords[currentWord][i] == word[i]) {
                correctKeys ++
            } else {
                equal = false
            }
            i++
        }
        // Check if this isn't the last word
        if (currentWord < testLength - 1) {
            currentWord ++;
            wordField.children[currentWord].classList.add("active");
        } else {
            getResults();
        }
    };
};

function getResults() {
    chars = generatedWords.join(' ').length;
    correctKeys += testLength - 1
    time = (Date.now() - testStart) / 1000 / 60;
    // Update text elements
    document.getElementById("wpm").textContent = Math.round((correctKeys/5)/time)
    document.getElementById("raw").textContent = Math.round((chars/5)/time)
    document.getElementById("acc").textContent = Math.round((correctKeys/(chars + extraKeys)) * 100) + "%"
    document.getElementById("time").textContent = Math.round(time * 60) + "s"
    // Other basic appearance things
    results.classList.remove("invisible")
    inputField.value = ""
    inputField.disabled = true;
};

function setTestLength(n) {
    if (n == "verse") {
    // Scripture mode
        let passageIndex = (Math.floor(Math.random() * verseBank.length/2)) * 2
        document.getElementById("source").textContent = "You just typed" + verseBank[passageIndex]
        passage = verseBank[passageIndex + 1].split(' ');
        passage.shift();
        testLength = passage.length - 1;
        mode = "scripture";
        document.getElementById("source").classList.remove("invisible")
    } else {
        passage = '';
        testLength = n;
        mode = "words";
        document.getElementById("source").classList.add("invisible")
    }
    // Reset underlines
    for (let i = 0; i < header.children.length; i++) {
        header.children[i].className = "";
    };
    // Underline the correct number
    header.children[[10, 25, 50, 100].indexOf(n)+1].classList.add("activemode");
    // Remove all words
    while (wordField.firstChild) {
        wordField.removeChild(wordField.lastChild);
    }
    // Add the words back
    while (wordField.children.length < testLength) {
        const word = document.createElement("span");
        word.textContent = "word ";
        wordField.appendChild(word);
    };
    setWordField();
    inputField.disabled = false;
    inputField.value = "";
    inputField.focus();
};
document.getElementById("verse").onclick = function() {setTestLength("verse")}
document.getElementById("10words").onclick = function() {setTestLength(10)};
document.getElementById("25words").onclick = function() {setTestLength(25)};
document.getElementById("50words").onclick = function() {setTestLength(50)};
document.getElementById("100words").onclick = function() {setTestLength(100)};

document.addEventListener('keydown', e => {
    if (e.code === 'Space') {
        // Check typed word, clear input bar, prevent space from being typed
        inputField.classList.remove("currentlyIncorrect")
        checkWord();
        inputField.value = "";
        e.preventDefault();
    } else if (e.code == 'Backspace') {
        inputField.classList.remove("currentlyIncorrect")
        extraKeys ++;
    } else {
        k = e.keyCode;
        // If letter or punctuation typed
        if ((k >= 65 && k <= 90) || (k >= 97 && k <= 122) || (k == 190) || (k == 49) || (k == 222)) {
            if (!testStarted) {
                testStart = Date.now();
                testStarted = true;
            };
            // Changing colour of input field
            if (inputField.value + e.key != generatedWords[currentWord].slice(0, inputField.value.length + 1) && !inputField.disabled) {
                inputField.classList.add("currentlyIncorrect")
            } else {
                inputField.classList.remove("currentlyIncorrect")
            }
            // Complete test if last word has been typed, ie. don't need to press space at the end
            if (inputField.value + e.key == generatedWords[currentWord] && currentWord == testLength - 1) {
                inputField.value += e.key;
                checkWord();
            }
        }
    }
});

document.getElementById("restart").addEventListener("click", function() {
    if (mode == "scripture") {
        setTestLength("verse")
    } else {
        setWordField();
    }
    inputField.disabled = false;
    inputField.value = "";
    inputField.focus();
});

window.onload = function() {
    setTestLength("verse");
};

// Settings window
document.getElementById("settings").onclick = function() {
    console.log("settings");
}