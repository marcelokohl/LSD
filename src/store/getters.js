import dp from 'dot-prop';

const countries = state => state.countries;

const campaignProgress = state => dp.get(state, 'user.game.campaign.process', 1);

export default {
    countries,
    campaignProgress,
}