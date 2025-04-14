<script setup lang="ts">
  import {Github, FileText} from "lucide-vue-next"
  import {Button} from "~/components/ui/button";

  const projects = [
    {
      title: "Rater",
      description: "Rater allows to get currency exchange rates",
      github: "https://github.com/LiquidCats/rater",
    }
  ]
</script>

<template>
  <div>
    <Card v-for="project in projects">
      <CardHeader>
        <CardTitle>{{ project.title }}</CardTitle>
        <CardDescription>{{ project.description }}</CardDescription>
      </CardHeader>
      <CardFooter class="flex flex-row flex-wrap justify-between">
        <Button variant="link" as-child>
          <a :href="project.github" target="_blank" class="inline-flex gap-1">
            <Github class="size-5"/>{{ project.github }}
          </a>
        </Button>
        <Button as-child>
          <NuxtLink class="inline-flex gap-1" to="/rater">
            <FileText class="size-5" />Documentation
          </NuxtLink>
        </Button>
      </CardFooter>
    </Card>
  </div>
</template>