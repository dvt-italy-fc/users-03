// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fuHHv7AjQ6K6Qz3dKBqbDo
// Component: qgQNzt9ri8AV
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
import { BaseInput } from "@plasmicpkgs/react-aria/skinny/registerInput";
import { inputHelpers as BaseInput_Helpers } from "@plasmicpkgs/react-aria/skinny/registerInput";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import plasmic_library_tailwind_3_4_colors_css from "../library_tailwind_3_4_color_tokens/plasmic.module.css"; // plasmic-import: 5ZtnypMovRHeeP3YTdPCYL/projectcss
import plasmic_library_tailwind_3_4_number_tokens_css from "../library_tailwind_3_4_number_tokens/plasmic.module.css"; // plasmic-import: 4vjRXvnb4XuY6J15w9oRcQ/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: fuHHv7AjQ6K6Qz3dKBqbDo/projectcss
import sty from "./PlasmicTextInput.module.css"; // plasmic-import: qgQNzt9ri8AV/css

createPlasmicElementProxy;

export const PlasmicTextInput__VariantProps = new Array(
  "type",
  "flat",
  "padded"
);

export const PlasmicTextInput__ArgProps = new Array(
  "placeholder",
  "defaultValue",
  "disabled",
  "readOnly",
  "autoFocus",
  "inputType",
  "inputMode",
  "autoComplete",
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

function PlasmicTextInput__RenderFunc(props) {
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
        path: "ariaInput.value",
        type: "readonly",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props["defaultValue"],
        onChangeProp: "onChange",
        onMutate: generateOnMutateForSpec("value", BaseInput_Helpers)
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
      autoComplete: args.autoComplete,
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
        sty.ariaInput,
        {
          [sty.ariaInputflat_bottom]: hasVariant($state, "flat", "bottom"),
          [sty.ariaInputflat_left]: hasVariant($state, "flat", "left"),
          [sty.ariaInputflat_right]: hasVariant($state, "flat", "right"),
          [sty.ariaInputflat_top]: hasVariant($state, "flat", "top"),
          [sty.ariaInputpadded_left]: hasVariant($state, "padded", "left"),
          [sty.ariaInputpadded_right]: hasVariant($state, "padded", "right"),
          [sty.ariaInputtype_plain]: hasVariant($state, "type", "plain"),
          [sty.ariaInputtype_soft]: hasVariant($state, "type", "soft")
        }
      ),
      defaultValue: args.defaultValue,
      disabled: args.disabled,
      inputMode: args.inputMode,
      onChange: async (...eventArgs) => {
        generateStateOnChangePropForCodeComponents(
          $state,
          "value",
          ["ariaInput", "value"],
          BaseInput_Helpers
        ).apply(null, eventArgs);
      },
      placeholder: args.placeholder,
      plasmicUpdateVariant: updateVariant,
      readOnly: args.readOnly,
      type: args.inputType,
      value: generateStateValueProp($state, ["ariaInput", "value"])
    };
    initializeCodeComponentStates(
      $state,
      [
        {
          name: "value",
          plasmicStateName: "ariaInput.value"
        }
      ],

      [],
      BaseInput_Helpers ?? {},
      child$Props
    );
    return (
      <BaseInput
        data-plasmic-name={"ariaInput"}
        data-plasmic-override={overrides.ariaInput}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        {...child$Props}
      />
    );
  })();
}

const PlasmicDescendants = {
  ariaInput: ["ariaInput"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicTextInput__ArgProps,
          internalVariantPropNames: PlasmicTextInput__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTextInput__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "ariaInput") {
    func.displayName = "PlasmicTextInput";
  } else {
    func.displayName = `PlasmicTextInput.${nodeName}`;
  }
  return func;
}

export const PlasmicTextInput = Object.assign(
  // Top-level PlasmicTextInput renders the root element
  makeNodeComponent("ariaInput"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicTextInput
    internalVariantProps: PlasmicTextInput__VariantProps,
    internalArgProps: PlasmicTextInput__ArgProps
  }
);

export default PlasmicTextInput;
/* prettier-ignore-end */
