const scrollReturnKey = (pathname: string) => `scroll-retorno:${pathname}`;

/** Guarda a rolagem da página antes de sair dela por um atalho, para devolvê-la quando a pessoa voltar. */
export function rememberScrollForReturn(pathname: string): void {
  try {
    sessionStorage.setItem(scrollReturnKey(pathname), String(window.scrollY));
  } catch {
    // sessionStorage indisponível: a página volta ao topo
  }
}

/** Rolagem guardada por `rememberScrollForReturn`; é consumida na leitura. */
export function takeScrollForReturn(pathname: string): number | undefined {
  try {
    const stored = sessionStorage.getItem(scrollReturnKey(pathname));
    sessionStorage.removeItem(scrollReturnKey(pathname));
    return stored === null ? undefined : Number(stored);
  } catch {
    return undefined;
  }
}
