<template>
  <div
    class="prose p-12 bg-red-100 rounded-md w-[65ch]"
    >
    <h2>Lesson</h2>
    <p>This is a lesson</p>
    <p>{{ chapter.title }}</p>
    <p>{{ lesson.title }}</p>

    <p>{{ lesson.text }}</p>
  </div>
</template>

<script setup>
const course = useCourse();
const route = useRoute();

const chapter = computed(() => {
  return course.chapters.find((chapter) => {
    return chapter.slug === route.params.chapterSlug;
  });
});

const lesson = computed(() => {
  return chapter.value.lessons.find((lesson) => {
    return lesson.slug === route.params.lessonSlug;
  });
});
</script>