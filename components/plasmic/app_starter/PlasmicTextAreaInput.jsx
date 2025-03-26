// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fuHHv7AjQ6K6Qz3dKBqbDo
// Component: nOyyGaPgUQ7h
import * as React from "react";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateOnMutateForSpec,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  hasVariant,
  initializeCodeComponentStates,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { BaseTextArea } from "@plasmicpkgs/react-aria/skinny/registerTextArea";
import { inputHelpers as BaseTextArea_Helpers } from "@plasmicpkgs/react-aria/skinny/registerTextArea";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import plasmic_library_tailwind_3_4_colors_css from "../library_tailwind_3_4_color_tokens/plasmic.module.css"; // plasmic-import: 5ZtnypMovRHeeP3YTdPCYL/projectcss
import plasmic_library_tailwind_3_4_number_tokens_css from "../library_tailwind_3_4_number_tokens/plasmic.module.css"; // plasmic-import: 4vjRXvnb4XuY6J15w9oRcQ/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: fuHHv7AjQ6K6Qz3dKBqbDo/projectcss
import sty from "./PlasmicTextAreaInput.module.css"; // plasmic-import: nOyyGaPgUQ7h/css

createPlasmicElementProxy;

export const PlasmicTextAreaInput__VariantProps = new Array(
  "type",
  "flat",
  "padded"
);

export const PlasmicTextAreaInput__ArgProps = new Array(
  "placeholder",
  "defaultValue",
  "disabled",
  "readOnly",
  "autoFocus",
  "inputMode",
  "ariaLabel",
  "onChange"
);

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicTextAreaInput__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = useCurrentUser?.() || {};
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "ariaTextArea.value",
        type: "readonly",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props["defaultValue"],
        onChangeProp: "onChange",
        onMutate: generateOnMutateForSpec("value", BaseTextArea_Helpers)
      },
      {
        path: "type",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.type
      },
      {
        path: "flat",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.flat
      },
      {
        path: "padded",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.padded
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  const [$ccVariants, setDollarCcVariants] = React.useState({
    focused: false,
    focusVisible: false,
    hovered: false,
    disabled: false
  });
  const updateVariant = React.useCallback(changes => {
    setDollarCcVariants(prev => {
      if (!Object.keys(changes).some(k => prev[k] !== changes[k])) {
        return prev;
      }
      return { ...prev, ...changes };
    });
  }, []);
  return (() => {
    const child$Props = {
      "aria-label": args.ariaLabel,
      autoFocus: args.autoFocus,
      className: classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        plasmic_library_tailwind_3_4_colors_css.plasmic_tokens,
        plasmic_library_tailwind_3_4_number_tokens_css.plasmic_tokens,
        sty.ariaTextArea,
        {
          [sty.ariaTextAreaflat_bottom]: hasVariant($state, "flat", "bottom"),
          [sty.ariaTextAreaflat_left]: hasVariant($state, "flat", "left"),
          [sty.ariaTextAreaflat_right]: hasVariant($state, "flat", "right"),
          [sty.ariaTextAreaflat_top]: hasVariant($state, "flat", "top"),
          [sty.ariaTextAreapadded_left]: hasVariant($state, "padded", "left"),
          [sty.ariaTextAreapadded_right]: hasVariant($state, "padded", "right"),
          [sty.ariaTextAreatype_plain]: hasVariant($state, "type", "plain"),
          [sty.ariaTextAreatype_soft]: hasVariant($state, "type", "soft")
        }
      ),
      defaultValue: args.defaultValue,
      disabled: args.disabled,
      inputMode: args.inputMode,
      onChange: async (...eventArgs) => {
        generateStateOnChangePropForCodeComponents(
          $state,
          "value",
          ["ariaTextArea", "value"],
          BaseTextArea_Helpers
        ).apply(null, eventArgs);
      },
      placeholder: args.placeholder,
      plasmicUpdateVariant: updateVariant,
      readOnly: args.readOnly,
      value: generateStateValueProp($state, ["ariaTextArea", "value"])
    };
    initializeCodeComponentStates(
      $state,
      [
        {
          name: "value",
          plasmicStateName: "ariaTextArea.value"
        }
      ],

      [],
      BaseTextArea_Helpers ?? {},
      child$Props
    );
    return (
      <BaseTextArea
        data-plasmic-name={"ariaTextArea"}
        data-plasmic-override={overrides.ariaTextArea}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        {...child$Props}
      />
    );
  })();
}

const PlasmicDescendants = {
  ariaTextArea: ["ariaTextArea"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicTextAreaInput__ArgProps,
          internalVariantPropNames: PlasmicTextAreaInput__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTextAreaInput__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "ariaTextArea") {
    func.displayName = "PlasmicTextAreaInput";
  } else {
    func.displayName = `PlasmicTextAreaInput.${nodeName}`;
  }
  return func;
}

export const PlasmicTextAreaInput = Object.assign(
  // Top-level PlasmicTextAreaInput renders the root element
  makeNodeComponent("ariaTextArea"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicTextAreaInput
    internalVariantProps: PlasmicTextAreaInput__VariantProps,
    internalArgProps: PlasmicTextAreaInput__ArgProps
  }
);

export default PlasmicTextAreaInput;
/* prettier-ignore-end */
