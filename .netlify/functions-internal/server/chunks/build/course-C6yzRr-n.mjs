import { _ as __nuxt_component_0 } from './nuxt-link-dSTnE66r.mjs';
import { a as __nuxt_component_1 } from './server.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { u as useCourse } from './useCourse-BP16zddV.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "course",
  __ssrInlineRender: true,
  setup(__props) {
    const { chapters } = useCourse();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-12 bg-gray-100 w-full h-full min-h-screen flex flex-col items-center" }, _attrs))}><div class="prose mb-12"><h1><span class="font-medium"> Course: <span class="font-bold">Mastering Nuxt 3</span></span></h1></div><div class="flex flex-row justify-center flex-grow"><div class="prose mr-4 p-8 bg-white rounded-md min-w-[20ch] max-w-[30ch] flex flex-col"><h3>Chapters</h3><!--[-->`);
      ssrRenderList(unref(chapters), (chapter) => {
        _push(`<div class="space-y-1 mb-4 flex flex-col"><h4>${ssrInterpolate(chapter.title)}</h4><!--[-->`);
        ssrRenderList(chapter.lessons, (lesson, index) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: ["flex flex-row space-x-1 no-underline prose-sm font-normal py-1", {
              "text-blue-500": lesson.path === _ctx.$route.path,
              "text-gray-600": lesson.path !== _ctx.$route.path
            }],
            key: lesson.slug,
            to: lesson.path
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="text-gray-500"${_scopeId}>${ssrInterpolate(index + 1)}.</span><span${_scopeId}>${ssrInterpolate(lesson.title)}</span>`);
              } else {
                return [
                  createVNode("span", { class: "text-gray-500" }, toDisplayString(index + 1) + ".", 1),
                  createVNode("span", null, toDisplayString(lesson.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></div><div class="prose p-12 bg-white rounded-md w-[65ch]">`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/course.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=course-C6yzRr-n.mjs.map
