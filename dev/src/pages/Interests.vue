<script setup>
import Navigation from '../components/Navigation.vue';
import SubHeading from '../components/SubHeading.vue';
</script>
<template>
    <Navigation />
    <div class="text-sm flex flex-col w-2/3 mx-auto mb-6 space-x-1 space-y-2 max-w-6xl">
        <div class="rounded-2xl bg-white shadow-xl">
            <h1 class="py-6 px-12 font-bold text-2xl text-gray-400">Interest In IT</h1>
        </div>
        <div class="rounded-2xl bg-white shadow-xl py-6 px-12 space-y-2">
            <SubHeading heading="What is your interest in IT?" />
            <p>
                IT has been my life for as long as I can remember. I’m fascinated by all sorts of hardware, software,
                networking, and data. In saying that, software and web develop is definitely my primary interest. Being
                able to write code that enables someone to connect to the hardware is such a crazy concept and I’m just
                always so eager to learn how to do more and more. Even writing basic functionality to edit a database is
                interesting to me.
            </p>
        </div>
        <div class="rounded-2xl bg-white shadow-xl py-6 px-12 space-y-2">
            <SubHeading heading="When did your interest in IT start?" />
            <p>
                My interest in IT started when I was relatively young, probably at 4 or 5 years old. I grew up on a farm
                and was not the type of kid who enjoyed being outside and I was always looking for reasons to be inside.
                The family computer was the perfect outlet, and I would spend hours using software like Paint and
                Microsoft Word just learning how they worked so I could do well in my primary school computer classes.
            </p>
        </div>
        <div class="rounded-2xl bg-white shadow-xl py-6 px-12 space-y-2">
            <SubHeading heading="Was there a particular event or person that sparked your interest?" />
            <p>
                I would say moving away from the farm and it’s dial up internet was the single most defining moment.
                With the power and speed of ADSL2+, I was able to start getting the answers about computers and IT
                related subjects whenever I needed it. This drew my focus into learning how to start writing my own
                applications and I started to learn the Visual Basic programming language as well as HTML to make
                websites. In recent times, I have befriended a developer on YouTube who has helped drive me to pursue a
                professional career.
            </p>
        </div>
        <div class="rounded-2xl bg-white shadow-xl py-6 px-12 space-y-2">
            <SubHeading heading="Outline your IT experience (if any)" />
            <p>
                Besides general usage of computers, I have experience building computers, having built a few for myself
                as well as others. I’ve taught myself how to code over the last 10 years and I’ve made a ‘Hello World’
                program in more languages than I can count, but I primarily use C# for software development and Vue.js &
                Laravel/PHP for web development. I’ve also got experience with servers and web hosting, owning some
                domains of my own for small projects. This has given me some great experience with protocols like SSH &
                FTP, as well as email protocols like SMTP and IMAP from email servers I’ve setup, as well as experience
                with resource monitoring.
            </p>
        </div>
        <div class="rounded-2xl bg-white shadow-xl py-6 px-12 space-y-2">
            <SubHeading heading="Why did you choose to come to RMIT?" />
            <p>
                I’ve chosen to study with RMIT for quite a few different reasons. Although I’m studying online, I
                enjoyed the campus when I visited through a year 12 program and thought that’s where I would end up
                studying. Unfortunately for my younger self, life took a few turns, but now after 8 years I’m getting
                stuck into it. RMIT has also always been in my head as one of the leading technical institutes in
                Australia, and becoming an RMIT alumni seems like a great way to kick of an IT career.
            </p>
        </div>
        <div class="rounded-2xl bg-white shadow-xl py-6 px-12 space-y-2">
            <SubHeading heading="What do you expect to learn during your studies?" />
            <p>
                I expect to get a general understanding of the way professional IT works, learning more about
                infrastructure and data with each unit. Learning how to approach problems from with different solutions
                and technologies is what my experience so far with IT has been, so I’m also hoping this unit will also
                show me some other problem-solving methods so I can keep finding new ways to complete tasks.
            </p>
        </div>
    </div>
</template>