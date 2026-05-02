import {
  back2top,
  loadTooltip,
  modeWatcher,
  interactiveTable
} from '../components';

export function basic() {
  modeWatcher();
  back2top();
  loadTooltip();
  interactiveTable();
}
