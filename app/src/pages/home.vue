<template>
  <div class="vp-home">
    <div class="grid grid-cols-6 gap-3">
      <div class="col-span-6 md:col-span-3">
        <div class="card bg-white rounded-lg px-2 py-2 text-center">
          <h2 class="text-xl font-bold my-2">Willkommen</h2>
          <p>
            wir sind ein Dienstleister für kleinere Unternehmen die eine
            Webseite brauchen. Dabei setzen wir auf moderne Technologien wie
            Progressive Web Apps um Unternehmen auch im Web gut zu präsentieren.
          </p>
        </div>
      </div>
      <div class="col-span-6 md:col-span-3">
        <div class="card bg-white rounded-lg px-2 py-2 text-center">
          <h2 class="text-xl font-bold my-2">Team</h2>
          <p>
            Das Team besteht momentan nur aus meiner Wenigkeit. Ich habe bereits
            ca. 10 Jahre Erfahrung mit den Webtechnolgien sammeln können und
            habe vor allem im Ecommerce meine Erfahrung gemacht.
          </p>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-6">
      <div class="col-span-6 text-center text-white font-bold my-10">
        <p>Bei Fragen stehe ich ihnen gerne per
        <a href="mailto:fragen@jmartz.gmbh" class="text-blue-600">Mail</a> oder
        auch per <router-link to="/contact" class="text-blue-600">Kontaktformular</router-link> zur
        Verfügung.</p>
      </div>
    </div>
    <div class="grid grid-cols-6 gap-3 mt-3">
      <div class="col-span-6">
        <h2 class="font-bold text-lg text-white">Technologien</h2>
      </div>
      <div class="col-span-6 md:col-span-2">
        <div class="card bg-white rounded-lg px-2 py-2 text-center">
          <fa :icon="['fab', 'vuejs']" class="fa-5x" />
          <h2 class="text-xl font-bold mt-2">Frontend</h2>
          <p>
            Im Frontend setzen wir auf Vite mit der neusten Version von VueJs 3.
            Außerdem setzen wir Tailwind Css ein um ein möglichst modernes
            Frontend zu haben. Danke PWA Plugin alles als Progressive Web App.
          </p>
        </div>
      </div>
      <div class="col-span-6 md:col-span-2">
        <div class="card bg-white rounded-lg px-2 py-2 text-center">
          <fa :icon="['fab', 'laravel']" class="fa-5x" />
          <h2 class="text-xl font-bold mt-2">Backend</h2>
          <p>
            Im Hintergrund setzen wir auf das PHP Framework Laravel oder deren
            Produkte Laravel Nova und Laravel Lumen. Wir halten den Version
            stehts aktuelle und haben so ein möglichst schnelles Backend.
            Außerdem läuft sie immer mit der neuesten Version von Mysql.
          </p>
        </div>
      </div>
      <div class="col-span-6 md:col-span-2">
        <div class="card bg-white rounded-lg px-2 py-2 text-center">
          <img
            src="https://www.hetzner.com/themes/hetzner/images/logo/hetzner-logo.svg"
            class="px-5 py-5 mt-2"
            alt=""
          />
          <h2 class="text-xl font-bold mt-2">Server</h2>
          <p>
            Unsere Server werden in deutschen Rechencentren bei der Hetzner
            Online GmbH gehostet. Das heißt ihre Daten fallen unter das deutsche
            Recht, mitsamt DSGVO. Das Server Managment über nehmen wir selbst.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import welcome from "../components/welcome.vue";
export default {
  name: "Homepage",
  components: {
    welcome: welcome,
  },
};
</script>
