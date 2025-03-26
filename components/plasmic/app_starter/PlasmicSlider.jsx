// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fuHHv7AjQ6K6Qz3dKBqbDo
// Component: xpiqBPr3xSYS
import * as React from "react";
import { useRouter } from "next/router";
import {
  Stack as Stack__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateStateOnChangeProp,
  generateStateValueProp,
  renderPlasmicSlot,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { BaseSlider } from "@plasmicpkgs/react-aria/skinny/registerSlider";
import Label from "../../Label"; // plasmic-import: 7JoyAF9duIIf/component
import { BaseSliderOutput } from "@plasmicpkgs/react-aria/skinny/registerSliderOutput";
import { BaseSliderTrack } from "@plasmicpkgs/react-aria/skinny/registerSliderTrack";
import SliderThumb from "../../SliderThumb"; // plasmic-import: MPkJWDAO06pU/component
import Description from "../../Description"; // plasmic-import: 1EjxoBomZjmY/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import plasmic_library_tailwind_3_4_colors_css from "../library_tailwind_3_4_color_tokens/plasmic.module.css"; // plasmic-import: 5ZtnypMovRHeeP3YTdPCYL/projectcss
import plasmic_library_tailwind_3_4_number_tokens_css from "../library_tailwind_3_4_number_tokens/plasmic.module.css"; // plasmic-import: 4vjRXvnb4XuY6J15w9oRcQ/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: fuHHv7AjQ6K6Qz3dKBqbDo/projectcss
import sty from "./PlasmicSlider.module.css"; // plasmic-import: xpiqBPr3xSYS/css

createPlasmicElementProxy;

export const PlasmicSlider__VariantProps = new Array();

export const PlasmicSlider__ArgProps = new Array(
  "showLabel",
  "showOutputText",
  "showDescription",
  "step",
  "minValue",
  "maxValue",
  "outputText",
  "filled",
  "initialValue",
  "disabled",
  "onChange",
  "ariaLabel",
  "label",
  "thumbs"
);

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSlider__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          showLabel: true,
          showOutputText: true,
          showDescription: false,
          filled: true,
          initialValue: 50
        },
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
        path: "ariaSlider.value",
        type: "readonly",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props["initialValue"],
        onChangeProp: "onChange"
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
  return (
    <BaseSlider
      data-plasmic-name={"ariaSlider"}
      data-plasmic-override={overrides.ariaSlider}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      aria-label={args.ariaLabel}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        plasmic_library_tailwind_3_4_colors_css.plasmic_tokens,
        plasmic_library_tailwind_3_4_number_tokens_css.plasmic_tokens,
        sty.ariaSlider
      )}
      defaultValue={args.initialValue}
      isDisabled={args.disabled}
      maxValue={args.maxValue}
      minValue={args.minValue}
      onChange={async (...eventArgs) => {
        generateStateOnChangeProp($state, ["ariaSlider", "value"]).apply(
          null,
          eventArgs
        );
      }}
      orientation={"horizontal"}
      plasmicUpdateVariant={updateVariant}
      step={args.step}
      value={generateStateValueProp($state, ["ariaSlider", "value"])}
    >
      {$props.showLabel || $props.showOutputText ? (
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__s9KIs)}
        >
          {$props.showLabel ? (
            <Label
              data-plasmic-name={"label"}
              data-plasmic-override={overrides.label}
              className={classNames("__wab_instance", sty.label)}
            >
              {renderPlasmicSlot({
                defaultContents: (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__bd9Iz
                    )}
                  >
                    {"Label"}
                  </div>
                ),

                value: args.label
              })}
            </Label>
          ) : null}
          {(() => {
            try {
              return $props.showOutputText;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return true;
              }
              throw e;
            }
          })() ? (
            <BaseSliderOutput
              data-plasmic-name={"ariaSliderOutput"}
              data-plasmic-override={overrides.ariaSliderOutput}
              className={classNames("__wab_instance", sty.ariaSliderOutput)}
            >
              <React.Fragment>
                {$props.outputText ?? $state.ariaSlider.value}
              </React.Fragment>
            </BaseSliderOutput>
          ) : null}
        </Stack__>
      ) : null}
      <div className={classNames(projectcss.all, sty.freeBox__x2O)}>
        <div
          data-plasmic-name={"background"}
          data-plasmic-override={overrides.background}
          className={classNames(projectcss.all, sty.background)}
        >
          <BaseSliderTrack
            data-plasmic-name={"ariaSliderTrack"}
            data-plasmic-override={overrides.ariaSliderTrack}
            className={classNames("__wab_instance", sty.ariaSliderTrack)}
            progressBar={
              $props.filled ? (
                <div
                  data-plasmic-name={"foreground"}
                  data-plasmic-override={overrides.foreground}
                  className={classNames(projectcss.all, sty.foreground)}
                />
              ) : null
            }
          >
            {renderPlasmicSlot({
              defaultContents: (
                <SliderThumb
                  className={classNames(
                    "__wab_instance",
                    sty.sliderThumb___33EeH
                  )}
                />
              ),

              value: args.thumbs
            })}
          </BaseSliderTrack>
        </div>
      </div>
      {$props.showDescription ? (
        <Description
          data-plasmic-name={"description"}
          data-plasmic-override={overrides.description}
          className={classNames("__wab_instance", sty.description)}
        />
      ) : null}
    </BaseSlider>
  );
}

const PlasmicDescendants = {
  ariaSlider: [
    "ariaSlider",
    "label",
    "ariaSliderOutput",
    "background",
    "ariaSliderTrack",
    "foreground",
    "description"
  ],

  label: ["label"],
  ariaSliderOutput: ["ariaSliderOutput"],
  background: ["background", "ariaSliderTrack", "foreground"],
  ariaSliderTrack: ["ariaSliderTrack", "foreground"],
  foreground: ["foreground"],
  description: ["description"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicSlider__ArgProps,
          internalVariantPropNames: PlasmicSlider__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSlider__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "ariaSlider") {
    func.displayName = "PlasmicSlider";
  } else {
    func.displayName = `PlasmicSlider.${nodeName}`;
  }
  return func;
}

export const PlasmicSlider = Object.assign(
  // Top-level PlasmicSlider renders the root element
  makeNodeComponent("ariaSlider"),
  {
    // Helper components rendering sub-elements
    label: makeNodeComponent("label"),
    ariaSliderOutput: makeNodeComponent("ariaSliderOutput"),
    background: makeNodeComponent("background"),
    ariaSliderTrack: makeNodeComponent("ariaSliderTrack"),
    foreground: makeNodeComponent("foreground"),
    description: makeNodeComponent("description"),
    // Metadata about props expected for PlasmicSlider
    internalVariantProps: PlasmicSlider__VariantProps,
    internalArgProps: PlasmicSlider__ArgProps
  }
);

export default PlasmicSlider;
/* prettier-ignore-end */
