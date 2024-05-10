import { test, expect } from '@playwright/test';

import { POKEMON_NAMES, type PokemonNumber } from '../src/constants/pokemon';

// Using the default generation settings, answers every Pokémon and ensures they
// move to the next Pokémon with no issues.
test('every pokemon works', async ({ page }) => {
  test.setTimeout(300000);

  await page.goto('http://localhost:5173/');

  const progressCounter = await page.locator('.progress-counter');
  const lastNumber = parseInt((await progressCounter.innerText()).split(' / ')[1], 10);

  const inputEl = await page.locator('input[name=pokemonGuess]');

  for (let i = 0; i < lastNumber - 1; i++) {
    const pokemonNumber = parseInt((await inputEl.getAttribute('data-pokemon-number'))!, 10) as PokemonNumber;
    const pokemon = POKEMON_NAMES.find((pokemon => pokemon.number === pokemonNumber))!;

    await inputEl.fill(pokemon.names.en);
    await expect(inputEl).toHaveClass(/answer-input-correct/);
    await inputEl.press('Enter');
  }

  await page.isVisible('.generation-finished');
});
