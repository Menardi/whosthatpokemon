import { test, expect } from '@playwright/test';

import { POKEMON_NAMES, type PokemonNumber } from '../src/constants/pokemon';

const language = 'en' as const;

// Using the default generation settings, answers every Pokémon and ensures they
// move to the next Pokémon with no issues.
test('every pokemon works', async ({ page }) => {
  test.setTimeout(300000);

  await page.goto('http://localhost:5173/');

  const progressCounter = await page.locator('.progress-counter');
  const lastNumber = parseInt((await progressCounter.innerText()).split(' / ')[1], 10);

  // Switch to the selected language
  await (await page.locator(`.app-inner-main .language-selector-flags button[data-lang=${language}]`)).click();

  const inputEl = await page.locator('input[name=pokemonGuess]');

  for (let i = 0; i < lastNumber - 1; i++) {
    const pokemonNumber = parseInt((await inputEl.getAttribute('data-pokemon-number'))!, 10) as PokemonNumber;
    const pokemon = POKEMON_NAMES.find((pokemon => pokemon.number === pokemonNumber))!;
    const name = pokemon.names[language];

    try {
      await inputEl.fill(name);
      await expect(inputEl).toHaveClass(/answer-input-correct/);
      await inputEl.press('Enter');
    } catch (err) {
      console.error(`Failed to answer "${name}"`);
      throw err;
    }
  }

  await page.isVisible('.generation-finished');
});
