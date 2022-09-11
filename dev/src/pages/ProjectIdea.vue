<script setup>
import Navigation from '../components/Navigation.vue';
import SubHeading from '../components/SubHeading.vue';
</script>
<template>
    <Navigation />

    <div class="text-sm flex flex-col w-2/3 mx-auto mb-6 space-x-1 space-y-2">
        <div class="rounded-2xl bg-white shadow-xl">
            <h1 class="py-6 px-12 font-bold text-2xl text-gray-400">Project Idea</h1>
        </div>
        <div class="rounded-2xl bg-white shadow-xl py-6 px-12 space-y-2">
            <SubHeading heading="Overview" />
            <p>
                <span class="font-semibold">Schoolar</span> is an application targeted at university students and other
                academics. It is an article saver and reader designed for keeping record of
                articles used in studies, or provided in studies. The application will also be able to provide
                referencing in many of the major referencing styles. There will be multiple reading
                modes like ‘distraction free’ and a ‘speed reading’ mode. Users will also be able to store their own
                work within the application to keep everything together. The program will be free
                for students, and offered as a low-cost subscription to everyone else, or as a one-time, single platform
                purchase without cloud services.
            </p>
        </div>
        <div class="rounded-2xl bg-white shadow-xl py-6 px-12 space-y-2">
            <SubHeading heading="Motivation" />
            <p>
                My motivation to make this application is because in my experience so far as a university student, many
                of the articles I have been provided have been lost after the unit has been
                completed. By having an application like this one, students and academics will be able to build their
                own article ‘library’ for use in assignments and projects. Referencing is
                also something that some people find difficult, and many people use applications to assist them with it.
                Adding this functionality will be a nice feature for users, allowing them to
                just use a single application.
            </p>
        </div>
        <div class="rounded-2xl bg-white shadow-xl py-6 px-12 space-y-2">
            <SubHeading heading="Description" />
            <p>
                Schoolar will be a simple to use article storage and article reader aimed at students and academics. The
                application will be designed compatibility across computers and mobile devices,
                managed by a single user account. When a user registers, if they are signing up with a valid ‘.edu’
                email address, their account will be free to use all services for a three-year period.
            </p>
            <p>
                The design of the application will be pretty simple, allowing it to also have a web app following a
                similar design. The application will have three main sections; one for displaying the
                list of articles and altering the list, one for viewing the article itself, and one for referencing.
            </p>
            <p>
                On large devices, the layout will be three columns, with the left-hand column containing the list of
                articles, as well as shortcut buttons to add new articles, mark/unmark them as read,
                and remove them. When an article is added, the user will be prompted to categorise it either from a list
                of default categories, such as ‘Essential Readings’ or ‘Textbook Excerpt’, or
                their own custom categories. Each article will also be taggable, for example tagged to a unit or topic,
                so that they can be searched and found easier. The middle column will be the
                primary column, and it will be where content is displayed. The content can either be able to be
                displayed ‘as-is’, which will just be a web view of the article, ‘distraction free’,
                which would strip the article of advertisements and non-essential images, and in a ‘speed reading’ mode,
                which would allow the user to speed read through the article. The third
                column will be the referencing column. The user will be able to highlight text, and the program will be
                able to correctly cite it in their chosen referencing format.
            </p>
            <p>
                Smaller devices will only work with a student or subscription-based account, all of the functionality
                will remain the same, however the application will be presented as a single
                view for each component. The user will be present with the list of their articles and the controls for
                them. When the user selects from the list, the view will change to the content
                isplay and a navigation arrow will appear at the top of the application allowing them to go back. If the
                user selects text, in the context menu there will be an option for ‘reference’,
                which will then display a view for referencing the text.
            </p>
            <p>
                When a user is citing an article, they will have the option to create a running bibliography so that
                they can keep track of all of the other articles they have referenced, and then when
                their work is completed, they will be able to upload that as well. Being able to keep everything
                together is a nice feature, as it provides an extra point of backup as well as the option
                to access their work from anywhere.
            </p>
        </div>
        <div class="rounded-2xl bg-white shadow-xl py-6 px-12 space-y-2">
            <SubHeading heading="Tools & Technologies" />
            <p>
                The application will be primarily developed with the .NET MAUI framework using the C# programming
                language. The data will be stored in a MariaDB, and accessed via API calls made to a
                Laravel/PHP backend. For the web version of the application, it will be created with Vue.js and styled
                with Tailwind CSS.
            </p>
            <p>
                Visual Studio 2022 and Visual Studio code will be required software, and package managers like NPM and
                Composer will also be needed.
            </p>
            <p>
                To keep costs down, the application will be built with scalability in mind and hosted on a cloud-based
                platform. This will ensure the application is always getting the resources that it needs.
            </p>
        </div>
        <div class="rounded-2xl bg-white shadow-xl py-6 px-12 space-y-2">
            <SubHeading heading="Skills Required" />
            <p>
                Building the application will require frontend as well as backend programming skills. Using .NET MAUI
                for the application frontend means that the application will be designed using the XAML
                markup language. The backend for the application will be written in C# so that will require a good
                amount of knowledge as well. The frontend for the website will be built with Vue.js, so that
                will require a good understanding of HTML and JavaScript. And finally, with the data service being a
                Laravel API connected to MariaDB, a good understanding of PHP and SQL is also required.
            </p>
        </div>
        <div class="rounded-2xl bg-white shadow-xl py-6 px-12 space-y-2">
            <SubHeading heading="Outcome" />
            <p>
                Creating an educational tool that isn’t difficult to get started with or an absolute chore to use is the
                number one priority. With a fast, easy to use application, the ideal outcome is
                that it gets picked up by students across the world and increases their quality of work. Partnering with
                universities or other academic institutes would also be a great goal. The code could
                easily be modified to have teachers ‘push’ articles to students and monitor if they’ve been opened or
                not, which could be a powerful tool for them to have.
            </p>
        </div>
    </div>
</template>