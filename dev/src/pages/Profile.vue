<script setup>
    import Navigation from '../components/Navigation.vue';
    import SubHeading from '../components/SubHeading.vue';
</script>
    
<template>
    <Navigation/>
    <div class="text-sm flex flex-col w-2/3 mx-auto mb-6 space-x-1 space-y-2 max-w-6xl">
        <div class="rounded-2xl bg-white shadow-xl">
            <h1 class="py-6 px-12 font-bold text-2xl text-gray-400">Interest In IT</h1>
        </div>
        <div class="rounded-2xl bg-white flex flex-col shadow-xl space-y-4 py-6">
            <div class="flex space-x-2 p-6">
                <img @click="openLink('https://www.16personalities.com/infp-personality')" class="w-1/3 object-contain hover:scale-110 bg-white hover:shadow-xl hover:cursor-pointer shadow-md" src="../assets/mb.png" />
                <img @click="('http://www.educationplanner.org/students/self-assessments/learning-styles-quiz.shtml')" class="w-1/3 bg-white object-contain hover:scale-110 hover:shadow-xl hover:cursor-pointer shadow-md" src="../assets/edu.png" />
                <img @click="openLink('https://richardstep.com/dope-personality-type-quiz/dope-bird-4-personality-types-test-questions-online-version/')" class="w-1/3 bg-white object-contain hover:cursor-pointer  hover:scale-110 hover:shadow-xl shadow-md" src="../assets/dope.png" />
            </div>
            <p class="px-12">The test I’ve done are the Myers-Briggs test, a learning style test, and the DOPE Bird Personality test. The reasoning behind choosing the third test is because it’s actually a personality test that the company I work for actively uses.</p>
        </div>
        <div class="rounded-2xl bg-white shadow-xl py-6 px-12 space-y-2">
            <SubHeading heading="What do the results of these tests mean for you?" />
            <p>
                For me, these results don’t mean all that much, especially the online learning one. I tried a few of them before finishing on the one I did, and all of them gave me a very mixed result split almost exactly like the one I’ve included. 
                Throughout my schooling life I never felt like the tests worked, and even since school I’ve seen many articles and videos explaining that they don’t <span class="text-blue-400 underline">(Veratsium, 2022)</span>. As for the personality tests, I can’t disagree with the results, 
                but they feel almost like a horoscope, no matter what your result you can always find something in it that you can somehow relate to yourself. I even retook the Myers-Briggs another two times, alternating between agree and disagree for 
                everything once and getting the ‘Debater’ personality, and then alternating between agree and disagree for everything and getting the ‘Defender’. These other personalities have attributes I feel like I see in myself, or hope that others 
                see in me. I personally believe that there are just too many people to try and push into 16 different boxes. 
            </p>
        </div>
        <div class="rounded-2xl bg-white shadow-xl py-6 px-12 space-y-2">
            <SubHeading heading="How do you think these results may influence your behaviour in a team?" />
            <p>
                I don’t believe that these results will influence my behaviour in a team. As mentioned, I’m not a big believer in these tests so I don’t think I will take note of what characteristics I’m supposed to be showing, 
                and I also won’t be checking the rest of the team if they’re matching. I’m just going to put in whatever I can, and expect my team members to do the same. 
            </p>
        </div>
        <div class="rounded-2xl bg-white shadow-xl py-6 px-12 space-y-2">
            <SubHeading heading="How should you take this into account when forming a team?" />
            <p>
                I’m not exactly sure on this one, as mentioned I won’t be checking in on others. I imagine some group members or employers will check to see if they have compatible personality types so they can decide if it’s the right fit, 
                but in my experience there’s no replacement to actually interacting with people to decide these things as well. 
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            openLink(link) {
                window.open(link, '_blank').focus();
            }
        }
    }
</script>