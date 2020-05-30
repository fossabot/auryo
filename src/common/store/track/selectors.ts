import { StoreState } from 'AppReduxTypes';
import { createSelector } from 'reselect';

export const getTrackNode = (state: StoreState) => state.track;

export const isTrackLoading = (trackId: string) =>
  createSelector([getTrackNode], track => track.loading.includes(+trackId));
export const isTrackError = (trackId: number | string) => createSelector([getTrackNode], track => track.error[trackId]);
