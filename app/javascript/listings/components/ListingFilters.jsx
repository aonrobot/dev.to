import { h } from 'preact';
import PropTypes from 'prop-types';
import ListingFiltersCategories from './ListingFiltersCategories';
import ListingFiltersTags from './ListingFiltersTags';
import { tagPropTypes } from '../../common-prop-types';

const ListingFilters = ({
  categories,
  category,
  onSelectCategory,
  message,
  onKeyUp,
  onClearQuery,
  onRemoveTag,
  tags,
  onKeyPress,
  query,
}) => {
  return (
    <div className="listings-filters" id="listings-filters">
      <ListingFiltersCategories
        categories={categories}
        category={category}
        onClick={onSelectCategory}
      />
      <ListingFiltersTags
        message={message}
        onKeyUp={onKeyUp}
        onClearQuery={onClearQuery}
        onRemoveTag={onRemoveTag}
        tags={tags}
        onKeyPress={onKeyPress}
        query={query}
      />
    </div>
  );
};

ListingFilters.propTypes = {
  categories: PropTypes.isRequired,
  category: PropTypes.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
  message: PropTypes.isRequired,
  onKeyUp: PropTypes.func.isRequired,
  onClearQuery: PropTypes.func.isRequired,
  onRemoveTag: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(tagPropTypes).isRequired,
  onKeyPress: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default ListingFilters;