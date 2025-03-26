// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fuHHv7AjQ6K6Qz3dKBqbDo
// Component: qfttqsCTRs_5
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateOnMutateForSpec,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  initializeCodeComponentStates,
  set as $stateSet,
  useCurrentUser,
  useDollarState
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv
} from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";
import PageLayout from "../../PageLayout"; // plasmic-import: xKvzzMrOg7y1/component
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import { RichTable } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-table";
import { tableHelpers as RichTable_Helpers } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-table";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import plasmic_library_tailwind_3_4_colors_css from "../library_tailwind_3_4_color_tokens/plasmic.module.css"; // plasmic-import: 5ZtnypMovRHeeP3YTdPCYL/projectcss
import plasmic_library_tailwind_3_4_number_tokens_css from "../library_tailwind_3_4_number_tokens/plasmic.module.css"; // plasmic-import: 4vjRXvnb4XuY6J15w9oRcQ/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: fuHHv7AjQ6K6Qz3dKBqbDo/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: qfttqsCTRs_5/css

createPlasmicElementProxy;

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props) {
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
  let [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "table.selectedRowKey",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: generateOnMutateForSpec("selectedRowKey", RichTable_Helpers)
      },
      {
        path: "table.selectedRow",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: generateOnMutateForSpec("selectedRow", RichTable_Helpers)
      },
      {
        path: "table.selectedRows",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: generateOnMutateForSpec("selectedRows", RichTable_Helpers)
      },
      {
        path: "table.selectedRowKeys",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: generateOnMutateForSpec("selectedRowKeys", RichTable_Helpers)
      },
      {
        path: "datiTabella",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => [
          { id: 1, nome: "Mario Rossi", "et\u00e0": 35, "citt\u00e0": "Roma" },
          {
            id: 2,
            nome: "Giulia Bianchi",
            "et\u00e0": 28,
            "citt\u00e0": "Milano"
          },
          {
            id: 3,
            nome: "Paolo Verdi",
            "et\u00e0": 42,
            "citt\u00e0": "Napoli"
          }
        ]
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();
  const new$Queries = {
    query: usePlasmicDataOp(() => {
      return {
        sourceId: "skEbYiwpZxwQS4Z76pAKc",
        opId: "df914421-ce01-4222-a583-45d9a35860c6",
        userArgs: {},
        cacheKey: `plasmic.$.df914421-ce01-4222-a583-45d9a35860c6.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);
    $queries = new$Queries;
  }
  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            plasmic_library_tailwind_3_4_colors_css.plasmic_tokens,
            plasmic_library_tailwind_3_4_number_tokens_css.plasmic_tokens,
            sty.root
          )}
        >
          <PageLayout
            data-plasmic-name={"pageLayout"}
            data-plasmic-override={overrides.pageLayout}
            className={classNames("__wab_instance", sty.pageLayout)}
          >
            <DataCtxReader__>
              {$ctx => (
                <React.Fragment>
                  <AntdButton
                    className={classNames("__wab_instance", sty.button__vfjNm)}
                    onClick={async () => {
                      const $steps = {};
                      $steps["runCode"] = true
                        ? (() => {
                            const actionArgs = {
                              customFunction: async () => {
                                return (async () => {
                                  async function fetchData() {
                                    try {
                                      const response = await fetch(
                                        "https://webhook.latenode.com/18198/dev/0c544a03-2289-47f8-bd05-5091c28c9a9c",
                                        {
                                          method: "GET",
                                          headers: {
                                            "Content-Type": "application/json"
                                          }
                                        }
                                      );
                                      if (!response.ok) {
                                        throw new Error(
                                          "Errore nella risposta API"
                                        );
                                      }
                                      console.log("response", response);
                                      const data = await response.json();
                                      console.log("data", data);
                                      return data;
                                    } catch (error) {
                                      console.error(
                                        "Errore durante la chiamata API:",
                                        error
                                      );
                                      return null;
                                    }
                                  }
                                  return fetchData();
                                })();
                              }
                            };
                            return (({ customFunction }) => {
                              return customFunction();
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["runCode"] != null &&
                        typeof $steps["runCode"] === "object" &&
                        typeof $steps["runCode"].then === "function"
                      ) {
                        $steps["runCode"] = await $steps["runCode"];
                      }
                    }}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__j8Uxj
                      )}
                      onClick={async event => {
                        const $steps = {};
                        $steps["updateTableSelectedRowKey"] = true
                          ? (() => {
                              const actionArgs = {
                                variable: {
                                  objRoot: $state,
                                  variablePath: ["table", "selectedRowKey"]
                                },
                                operation: 0
                              };
                              return (({
                                variable,
                                value,
                                startIndex,
                                deleteCount
                              }) => {
                                if (!variable) {
                                  return;
                                }
                                const { objRoot, variablePath } = variable;
                                $stateSet(objRoot, variablePath, value);
                                return value;
                              })?.apply(null, [actionArgs]);
                            })()
                          : undefined;
                        if (
                          $steps["updateTableSelectedRowKey"] != null &&
                          typeof $steps["updateTableSelectedRowKey"] ===
                            "object" &&
                          typeof $steps["updateTableSelectedRowKey"].then ===
                            "function"
                        ) {
                          $steps["updateTableSelectedRowKey"] = await $steps[
                            "updateTableSelectedRowKey"
                          ];
                        }
                      }}
                    >
                      {"Button"}
                    </div>
                  </AntdButton>
                  <section
                    data-plasmic-name={"section"}
                    data-plasmic-override={overrides.section}
                    className={classNames(projectcss.all, sty.section)}
                  >
                    <h1
                      data-plasmic-name={"h1"}
                      data-plasmic-override={overrides.h1}
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1
                      )}
                      onLoadStart={async event => {
                        const $steps = {};
                        $steps["httpGet"] = true
                          ? (() => {
                              const actionArgs = {
                                dataOp: {
                                  sourceId: "skEbYiwpZxwQS4Z76pAKc",
                                  opId: "d2f65577-5152-40cd-b4b7-f74090e37805",
                                  userArgs: {},
                                  cacheKey: null,
                                  invalidatedKeys: null,
                                  roleId: null
                                }
                              };
                              return (async ({ dataOp, continueOnError }) => {
                                try {
                                  const response = await executePlasmicDataOp(
                                    dataOp,
                                    {
                                      userAuthToken:
                                        dataSourcesCtx?.userAuthToken,
                                      user: dataSourcesCtx?.user
                                    }
                                  );
                                  await plasmicInvalidate(
                                    dataOp.invalidatedKeys
                                  );
                                  return response;
                                } catch (e) {
                                  if (!continueOnError) {
                                    throw e;
                                  }
                                  return e;
                                }
                              })?.apply(null, [actionArgs]);
                            })()
                          : undefined;
                        if (
                          $steps["httpGet"] != null &&
                          typeof $steps["httpGet"] === "object" &&
                          typeof $steps["httpGet"].then === "function"
                        ) {
                          $steps["httpGet"] = await $steps["httpGet"];
                        }
                      }}
                    >
                      {"Untitled page"}
                    </h1>
                    <AntdButton
                      className={classNames(
                        "__wab_instance",
                        sty.button__n2W9V
                      )}
                      onClick={async () => {
                        const $steps = {};
                        $steps["useIntegration"] = true
                          ? (() => {
                              const actionArgs = {};
                              return (async ({ dataOp, continueOnError }) => {
                                try {
                                  const response = await executePlasmicDataOp(
                                    dataOp,
                                    {
                                      userAuthToken:
                                        dataSourcesCtx?.userAuthToken,
                                      user: dataSourcesCtx?.user
                                    }
                                  );
                                  await plasmicInvalidate(
                                    dataOp.invalidatedKeys
                                  );
                                  return response;
                                } catch (e) {
                                  if (!continueOnError) {
                                    throw e;
                                  }
                                  return e;
                                }
                              })?.apply(null, [actionArgs]);
                            })()
                          : undefined;
                        if (
                          $steps["useIntegration"] != null &&
                          typeof $steps["useIntegration"] === "object" &&
                          typeof $steps["useIntegration"].then === "function"
                        ) {
                          $steps["useIntegration"] = await $steps[
                            "useIntegration"
                          ];
                        }
                      }}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__kouNh
                        )}
                        onClick={async event => {
                          const $steps = {};
                          $steps["goToPage"] = true
                            ? (() => {
                                const actionArgs = {};
                                return (({ destination }) => {
                                  if (
                                    typeof destination === "string" &&
                                    destination.startsWith("#")
                                  ) {
                                    document
                                      .getElementById(destination.substr(1))
                                      .scrollIntoView({ behavior: "smooth" });
                                  } else {
                                    __nextRouter?.push(destination);
                                  }
                                })?.apply(null, [actionArgs]);
                              })()
                            : undefined;
                          if (
                            $steps["goToPage"] != null &&
                            typeof $steps["goToPage"] === "object" &&
                            typeof $steps["goToPage"].then === "function"
                          ) {
                            $steps["goToPage"] = await $steps["goToPage"];
                          }
                        }}
                      >
                        {"Button"}
                      </div>
                    </AntdButton>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__x3EwD
                      )}
                    >
                      {
                        "Press the big blue + button to insert components like Tables, Text, Buttons, and Forms.\n\nJoin our Slack Community (icon in bottom left) for help!"
                      }
                    </div>
                  </section>
                  <AntdButton
                    className={classNames("__wab_instance", sty.button__np0N2)}
                    onClick={async () => {
                      const $steps = {};
                      $steps["updateDatiTabella"] = true
                        ? (() => {
                            const actionArgs = {
                              variable: {
                                objRoot: $state,
                                variablePath: ["datiTabella"]
                              },
                              operation: 0,
                              value:
                                ({
                                  id: 1,
                                  NAME: "AAA Rossi",
                                  età: 35,
                                  città: "Roma"
                                },
                                {
                                  id: 2,
                                  nome: "BBB Bianchi",
                                  età: 28,
                                  città: "Milano"
                                },
                                {
                                  id: 3,
                                  Cognome: "CCC Verdi",
                                  età: 42,
                                  città: "Napoli"
                                },
                                {
                                  id: 3,
                                  nome: "DDD Verdi",
                                  età: 42,
                                  città: "Napoli"
                                })
                            };
                            return (({
                              variable,
                              value,
                              startIndex,
                              deleteCount
                            }) => {
                              if (!variable) {
                                return;
                              }
                              const { objRoot, variablePath } = variable;
                              $stateSet(objRoot, variablePath, value);
                              return value;
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["updateDatiTabella"] != null &&
                        typeof $steps["updateDatiTabella"] === "object" &&
                        typeof $steps["updateDatiTabella"].then === "function"
                      ) {
                        $steps["updateDatiTabella"] = await $steps[
                          "updateDatiTabella"
                        ];
                      }
                    }}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___3XK0R
                      )}
                      onClick={async event => {
                        const $steps = {};
                        $steps["runInteractionProp"] = true
                          ? (() => {
                              const actionArgs = {};
                              return (({ eventRef, args }) => {
                                return eventRef?.(...(args ?? []));
                              })?.apply(null, [actionArgs]);
                            })()
                          : undefined;
                        if (
                          $steps["runInteractionProp"] != null &&
                          typeof $steps["runInteractionProp"] === "object" &&
                          typeof $steps["runInteractionProp"].then ===
                            "function"
                        ) {
                          $steps["runInteractionProp"] = await $steps[
                            "runInteractionProp"
                          ];
                        }
                      }}
                    >
                      {"Button"}
                    </div>
                  </AntdButton>
                  {(() => {
                    const child$Props = {
                      className: classNames("__wab_instance", sty.table),
                      data: (() => {
                        try {
                          return $state.datiTabella;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return (() => {
                              try {
                                return $queries.query2;
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return undefined;
                                }
                                throw e;
                              }
                            })();
                          }
                          throw e;
                        }
                      })(),
                      fields: (() => {
                        const __composite = [
                          { key: "id", fieldId: "id" },
                          { key: "nome", fieldId: "nome" },
                          { key: "età", fieldId: "età" },
                          { key: "città", fieldId: "città", dataType: null },
                          {},
                          { title: null }
                        ];

                        __composite["3"]["dataType"] = "string";
                        __composite["5"]["title"] = "azioni";
                        return __composite;
                      })(),
                      onRowSelectionChanged: async (...eventArgs) => {
                        generateStateOnChangePropForCodeComponents(
                          $state,
                          "selectedRowKey",
                          ["table", "selectedRowKey"],
                          RichTable_Helpers
                        ).apply(null, eventArgs);
                        generateStateOnChangePropForCodeComponents(
                          $state,
                          "selectedRow",
                          ["table", "selectedRow"],
                          RichTable_Helpers
                        ).apply(null, eventArgs);
                        generateStateOnChangePropForCodeComponents(
                          $state,
                          "selectedRows",
                          ["table", "selectedRows"],
                          RichTable_Helpers
                        ).apply(null, eventArgs);
                        generateStateOnChangePropForCodeComponents(
                          $state,
                          "selectedRowKeys",
                          ["table", "selectedRowKeys"],
                          RichTable_Helpers
                        ).apply(null, eventArgs);
                      },
                      scopeClassName: sty["table__instance"],
                      selectedRowKey: generateStateValueProp($state, [
                        "table",
                        "selectedRowKey"
                      ]),
                      selectedRowKeys: generateStateValueProp($state, [
                        "table",
                        "selectedRowKeys"
                      ]),
                      themeResetClassName: classNames(
                        projectcss.root_reset,
                        projectcss.root_reset_tags,
                        projectcss.plasmic_default_styles,
                        projectcss.plasmic_mixins,
                        projectcss.plasmic_tokens,
                        plasmic_antd_5_hostless_css.plasmic_tokens,
                        plasmic_plasmic_rich_components_css.plasmic_tokens,
                        plasmic_library_tailwind_3_4_colors_css.plasmic_tokens,
                        plasmic_library_tailwind_3_4_number_tokens_css.plasmic_tokens
                      )
                    };
                    initializeCodeComponentStates(
                      $state,
                      [
                        {
                          name: "selectedRowKey",
                          plasmicStateName: "table.selectedRowKey"
                        },
                        {
                          name: "selectedRow",
                          plasmicStateName: "table.selectedRow"
                        },
                        {
                          name: "selectedRows",
                          plasmicStateName: "table.selectedRows"
                        },
                        {
                          name: "selectedRowKeys",
                          plasmicStateName: "table.selectedRowKeys"
                        }
                      ],

                      [],
                      RichTable_Helpers ?? {},
                      child$Props
                    );
                    return (
                      <RichTable
                        data-plasmic-name={"table"}
                        data-plasmic-override={overrides.table}
                        {...child$Props}
                      />
                    );
                  })()}
                  <AntdButton
                    className={classNames("__wab_instance", sty.button__siiTg)}
                    onClick={async () => {
                      const $steps = {};
                      $steps["httpGet"] = true
                        ? (() => {
                            const actionArgs = {
                              dataOp: {
                                sourceId: "skEbYiwpZxwQS4Z76pAKc",
                                opId: "d2f65577-5152-40cd-b4b7-f74090e37805",
                                userArgs: {},
                                cacheKey: null,
                                invalidatedKeys: null,
                                roleId: null
                              }
                            };
                            return (async ({ dataOp, continueOnError }) => {
                              try {
                                const response = await executePlasmicDataOp(
                                  dataOp,
                                  {
                                    userAuthToken:
                                      dataSourcesCtx?.userAuthToken,
                                    user: dataSourcesCtx?.user
                                  }
                                );
                                await plasmicInvalidate(dataOp.invalidatedKeys);
                                return response;
                              } catch (e) {
                                if (!continueOnError) {
                                  throw e;
                                }
                                return e;
                              }
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["httpGet"] != null &&
                        typeof $steps["httpGet"] === "object" &&
                        typeof $steps["httpGet"].then === "function"
                      ) {
                        $steps["httpGet"] = await $steps["httpGet"];
                      }
                    }}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__iyy0E
                      )}
                    >
                      {"Button"}
                    </div>
                  </AntdButton>
                </React.Fragment>
              )}
            </DataCtxReader__>
          </PageLayout>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "pageLayout", "section", "h1", "table"],
  pageLayout: ["pageLayout", "section", "h1", "table"],
  section: ["section", "h1"],
  h1: ["h1"],
  table: ["table"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

function withUsePlasmicAuth(WrappedComponent) {
  const WithUsePlasmicAuthComponent = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "fuHHv7AjQ6K6Qz3dKBqbDo"
    });
    return (
      <PlasmicDataSourceContextProvider__
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </PlasmicDataSourceContextProvider__>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  withUsePlasmicAuth(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    pageLayout: makeNodeComponent("pageLayout"),
    section: makeNodeComponent("section"),
    h1: makeNodeComponent("h1"),
    table: makeNodeComponent("table"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
