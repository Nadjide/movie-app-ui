import { Box } from "@mui/material";
import SearchBar from "../components/SearchBar";
import { i18nMap } from "../i18n/map";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import useCurrentLang from "../i18n/hooks/useCurrentLang";
import { TmdbApiService } from "../services/api/tmdb";
import { container } from "tsyringe";

const tmdbApiService = container.resolve(TmdbApiService);

export default function Movies() {
    const { t } = useTranslation();
    const [searchTerm, setSearchTerm] = useState("");

    const currentLang = useCurrentLang((lang: string) =>
        tmdbApiService.search(searchTerm, lang)
    );

    const onSearch = (term: string) => {
        setSearchTerm(term);
        tmdbApiService.search(term, currentLang);
    };

    return (
        <Box>
            <SearchBar
                placeholder={t(i18nMap.movies.searchBar.placeholder)}
                onSearch={onSearch}
            />
        </Box>
    );
}