var wms_layers = [];

var format_SmethwickCanals_0 = new ol.format.GeoJSON();
var features_SmethwickCanals_0 = format_SmethwickCanals_0.readFeatures(json_SmethwickCanals_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SmethwickCanals_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SmethwickCanals_0.addFeatures(features_SmethwickCanals_0);
var lyr_SmethwickCanals_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SmethwickCanals_0, 
                style: style_SmethwickCanals_0,
                popuplayertitle: 'Smethwick Canals',
                interactive: true,
                title: '<img src="styles/legend/SmethwickCanals_0.png" /> Smethwick Canals'
            });
var format_LSOA28ASmethwick_1 = new ol.format.GeoJSON();
var features_LSOA28ASmethwick_1 = format_LSOA28ASmethwick_1.readFeatures(json_LSOA28ASmethwick_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LSOA28ASmethwick_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LSOA28ASmethwick_1.addFeatures(features_LSOA28ASmethwick_1);
var lyr_LSOA28ASmethwick_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LSOA28ASmethwick_1, 
                style: style_LSOA28ASmethwick_1,
                popuplayertitle: 'LSOA28A Smethwick',
                interactive: true,
                title: '<img src="styles/legend/LSOA28ASmethwick_1.png" /> LSOA28A Smethwick'
            });
var format_SmethwickMetro_2 = new ol.format.GeoJSON();
var features_SmethwickMetro_2 = format_SmethwickMetro_2.readFeatures(json_SmethwickMetro_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SmethwickMetro_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SmethwickMetro_2.addFeatures(features_SmethwickMetro_2);
var lyr_SmethwickMetro_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SmethwickMetro_2, 
                style: style_SmethwickMetro_2,
                popuplayertitle: 'Smethwick Metro',
                interactive: true,
                title: '<img src="styles/legend/SmethwickMetro_2.png" /> Smethwick Metro'
            });
var format_RailSmethwickTown_3 = new ol.format.GeoJSON();
var features_RailSmethwickTown_3 = format_RailSmethwickTown_3.readFeatures(json_RailSmethwickTown_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RailSmethwickTown_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RailSmethwickTown_3.addFeatures(features_RailSmethwickTown_3);
var lyr_RailSmethwickTown_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RailSmethwickTown_3, 
                style: style_RailSmethwickTown_3,
                popuplayertitle: 'Rail Smethwick Town',
                interactive: true,
                title: '<img src="styles/legend/RailSmethwickTown_3.png" /> Rail Smethwick Town'
            });
var format_BUSLSOA28ASmethwick_4 = new ol.format.GeoJSON();
var features_BUSLSOA28ASmethwick_4 = format_BUSLSOA28ASmethwick_4.readFeatures(json_BUSLSOA28ASmethwick_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUSLSOA28ASmethwick_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUSLSOA28ASmethwick_4.addFeatures(features_BUSLSOA28ASmethwick_4);
var lyr_BUSLSOA28ASmethwick_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUSLSOA28ASmethwick_4, 
                style: style_BUSLSOA28ASmethwick_4,
                popuplayertitle: 'BUS LSOA 28A Smethwick',
                interactive: true,
                title: '<img src="styles/legend/BUSLSOA28ASmethwick_4.png" /> BUS LSOA 28A Smethwick'
            });
var format_SmethwickBdgs_5 = new ol.format.GeoJSON();
var features_SmethwickBdgs_5 = format_SmethwickBdgs_5.readFeatures(json_SmethwickBdgs_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SmethwickBdgs_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SmethwickBdgs_5.addFeatures(features_SmethwickBdgs_5);
var lyr_SmethwickBdgs_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SmethwickBdgs_5, 
                style: style_SmethwickBdgs_5,
                popuplayertitle: 'Smethwick Bdgs',
                interactive: true,
                title: '<img src="styles/legend/SmethwickBdgs_5.png" /> Smethwick Bdgs'
            });
var format_SmethwickTown_6 = new ol.format.GeoJSON();
var features_SmethwickTown_6 = format_SmethwickTown_6.readFeatures(json_SmethwickTown_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SmethwickTown_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SmethwickTown_6.addFeatures(features_SmethwickTown_6);
var lyr_SmethwickTown_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SmethwickTown_6, 
                style: style_SmethwickTown_6,
                popuplayertitle: 'Smethwick Town',
                interactive: true,
                title: '<img src="styles/legend/SmethwickTown_6.png" /> Smethwick Town'
            });
var format_LSOA28AFlyTipping2025_7 = new ol.format.GeoJSON();
var features_LSOA28AFlyTipping2025_7 = format_LSOA28AFlyTipping2025_7.readFeatures(json_LSOA28AFlyTipping2025_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LSOA28AFlyTipping2025_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LSOA28AFlyTipping2025_7.addFeatures(features_LSOA28AFlyTipping2025_7);
var lyr_LSOA28AFlyTipping2025_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LSOA28AFlyTipping2025_7, 
                style: style_LSOA28AFlyTipping2025_7,
                popuplayertitle: 'LSOA 28A Fly Tipping  2025',
                interactive: true,
                title: '<img src="styles/legend/LSOA28AFlyTipping2025_7.png" /> LSOA 28A Fly Tipping  2025'
            });
var format_LSOA28ADogMess2025_8 = new ol.format.GeoJSON();
var features_LSOA28ADogMess2025_8 = format_LSOA28ADogMess2025_8.readFeatures(json_LSOA28ADogMess2025_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LSOA28ADogMess2025_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LSOA28ADogMess2025_8.addFeatures(features_LSOA28ADogMess2025_8);
var lyr_LSOA28ADogMess2025_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LSOA28ADogMess2025_8, 
                style: style_LSOA28ADogMess2025_8,
                popuplayertitle: 'LSOA 28A Dog Mess 2025',
                interactive: true,
                title: '<img src="styles/legend/LSOA28ADogMess2025_8.png" /> LSOA 28A Dog Mess 2025'
            });
var format_SmethwickRoads_9 = new ol.format.GeoJSON();
var features_SmethwickRoads_9 = format_SmethwickRoads_9.readFeatures(json_SmethwickRoads_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SmethwickRoads_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SmethwickRoads_9.addFeatures(features_SmethwickRoads_9);
var lyr_SmethwickRoads_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SmethwickRoads_9, 
                style: style_SmethwickRoads_9,
                popuplayertitle: 'Smethwick Roads',
                interactive: true,
                title: '<img src="styles/legend/SmethwickRoads_9.png" /> Smethwick Roads'
            });
var format_ResidentialOwnershipLSOA28ASmethwick_10 = new ol.format.GeoJSON();
var features_ResidentialOwnershipLSOA28ASmethwick_10 = format_ResidentialOwnershipLSOA28ASmethwick_10.readFeatures(json_ResidentialOwnershipLSOA28ASmethwick_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidentialOwnershipLSOA28ASmethwick_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResidentialOwnershipLSOA28ASmethwick_10.addFeatures(features_ResidentialOwnershipLSOA28ASmethwick_10);
var lyr_ResidentialOwnershipLSOA28ASmethwick_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResidentialOwnershipLSOA28ASmethwick_10, 
                style: style_ResidentialOwnershipLSOA28ASmethwick_10,
                popuplayertitle: 'Residential Ownership LSOA 28A Smethwick',
                interactive: true,
    title: 'Residential Ownership LSOA 28A Smethwick<br />\
    <img src="styles/legend/ResidentialOwnershipLSOA28ASmethwick_10_0.png" /> Sandwell MBC<br />\
    <img src="styles/legend/ResidentialOwnershipLSOA28ASmethwick_10_1.png" /> <br />\
    <img src="styles/legend/ResidentialOwnershipLSOA28ASmethwick_10_2.png" /> Non Sandwell MBC<br />' });
var format_BoundayLinesLSOA28A_11 = new ol.format.GeoJSON();
var features_BoundayLinesLSOA28A_11 = format_BoundayLinesLSOA28A_11.readFeatures(json_BoundayLinesLSOA28A_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoundayLinesLSOA28A_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BoundayLinesLSOA28A_11.addFeatures(features_BoundayLinesLSOA28A_11);
var lyr_BoundayLinesLSOA28A_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BoundayLinesLSOA28A_11, 
                style: style_BoundayLinesLSOA28A_11,
                popuplayertitle: 'Bounday Lines LSOA 28A ',
                interactive: true,
                title: '<img src="styles/legend/BoundayLinesLSOA28A_11.png" /> Bounday Lines LSOA 28A '
            });
var format_LSOA28AFlyPostingGraffitti_12 = new ol.format.GeoJSON();
var features_LSOA28AFlyPostingGraffitti_12 = format_LSOA28AFlyPostingGraffitti_12.readFeatures(json_LSOA28AFlyPostingGraffitti_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LSOA28AFlyPostingGraffitti_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LSOA28AFlyPostingGraffitti_12.addFeatures(features_LSOA28AFlyPostingGraffitti_12);
var lyr_LSOA28AFlyPostingGraffitti_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LSOA28AFlyPostingGraffitti_12, 
                style: style_LSOA28AFlyPostingGraffitti_12,
                popuplayertitle: 'LSOA 28A Fly Posting Graffitti',
                interactive: true,
                title: '<img src="styles/legend/LSOA28AFlyPostingGraffitti_12.png" /> LSOA 28A Fly Posting Graffitti'
            });
var format_LSOA28ADangerousLitter_13 = new ol.format.GeoJSON();
var features_LSOA28ADangerousLitter_13 = format_LSOA28ADangerousLitter_13.readFeatures(json_LSOA28ADangerousLitter_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LSOA28ADangerousLitter_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LSOA28ADangerousLitter_13.addFeatures(features_LSOA28ADangerousLitter_13);
var lyr_LSOA28ADangerousLitter_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LSOA28ADangerousLitter_13, 
                style: style_LSOA28ADangerousLitter_13,
                popuplayertitle: 'LSOA 28A Dangerous Litter',
                interactive: true,
                title: '<img src="styles/legend/LSOA28ADangerousLitter_13.png" /> LSOA 28A Dangerous Litter'
            });

lyr_SmethwickCanals_0.setVisible(true);lyr_LSOA28ASmethwick_1.setVisible(true);lyr_SmethwickMetro_2.setVisible(true);lyr_RailSmethwickTown_3.setVisible(true);lyr_BUSLSOA28ASmethwick_4.setVisible(true);lyr_SmethwickBdgs_5.setVisible(true);lyr_SmethwickTown_6.setVisible(true);lyr_LSOA28AFlyTipping2025_7.setVisible(true);lyr_LSOA28ADogMess2025_8.setVisible(true);lyr_SmethwickRoads_9.setVisible(true);lyr_ResidentialOwnershipLSOA28ASmethwick_10.setVisible(true);lyr_BoundayLinesLSOA28A_11.setVisible(true);lyr_LSOA28AFlyPostingGraffitti_12.setVisible(true);lyr_LSOA28ADangerousLitter_13.setVisible(true);
var layersList = [lyr_SmethwickCanals_0,lyr_LSOA28ASmethwick_1,lyr_SmethwickMetro_2,lyr_RailSmethwickTown_3,lyr_BUSLSOA28ASmethwick_4,lyr_SmethwickBdgs_5,lyr_SmethwickTown_6,lyr_LSOA28AFlyTipping2025_7,lyr_LSOA28ADogMess2025_8,lyr_SmethwickRoads_9,lyr_ResidentialOwnershipLSOA28ASmethwick_10,lyr_BoundayLinesLSOA28A_11,lyr_LSOA28AFlyPostingGraffitti_12,lyr_LSOA28ADangerousLitter_13];
lyr_SmethwickCanals_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SAP_NAME': 'SAP_NAME', 'SAP_PLANT_': 'SAP_PLANT_', 'SAP_PLAN_1': 'SAP_PLAN_1', 'SAP_KM_NAM': 'SAP_KM_NAM', 'SAP_CANAL_': 'SAP_CANAL_', 'SAP_FUNC_L': 'SAP_FUNC_L', 'FL_DESC': 'FL_DESC', 'Shape__Len': 'Shape__Len', 'GlobalID': 'GlobalID', });
lyr_LSOA28ASmethwick_1.set('fieldAliases', {'fid': 'fid', 'LSOA21CD': 'LSOA21CD', 'LSOA21NM': 'LSOA21NM', 'LSOA21NMW': 'LSOA21NMW', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LAT': 'LAT', 'LONG': 'LONG', 'GlobalID': 'GlobalID', 'SandwellLS': 'SandwellLS', 'Sandwell_1': 'Sandwell_1', 'Sandwell_2': 'Sandwell_2', 'Sandwell_3': 'Sandwell_3', 'Sandwell_4': 'Sandwell_4', 'Sandwell_5': 'Sandwell_5', 'Sandwell_6': 'Sandwell_6', 'Sandwell_7': 'Sandwell_7', 'Sandwell_8': 'Sandwell_8', 'Sandwell_9': 'Sandwell_9', 'Sandwell10': 'Sandwell10', 'Sandwell11': 'Sandwell11', 'Sandwell12': 'Sandwell12', 'Sandwell13': 'Sandwell13', 'Sandwell14': 'Sandwell14', 'Sandwell15': 'Sandwell15', 'Sandwell16': 'Sandwell16', 'Sandwell17': 'Sandwell17', 'Sandwell18': 'Sandwell18', 'Sandwell19': 'Sandwell19', 'SandwellLSOA_LSOAname 2021': 'SandwellLSOA_LSOAname 2021', 'SandwellLSOA_Local Authority District code (2024)': 'SandwellLSOA_Local Authority District code (2024)', 'SandwellLSOA_Local Authority District name (2024)': 'SandwellLSOA_Local Authority District name (2024)', 'SandwellLSOA_Index of Multiple Deprivation (IMD) Rank (where 1 is most deprived)': 'SandwellLSOA_Index of Multiple Deprivation (IMD) Rank (where 1 is most deprived)', 'SandwellLSOA_Index of Multiple Deprivation (IMD) Decile (where 1 is most deprived 10% of LSOAs)': 'SandwellLSOA_Index of Multiple Deprivation (IMD) Decile (where 1 is most deprived 10% of LSOAs)', 'SandwellLSOA_Sandwell Rank (High is Worse)': 'SandwellLSOA_Sandwell Rank (High is Worse)', 'SandwellLSOA_Income Rank (where 1 is most deprived)': 'SandwellLSOA_Income Rank (where 1 is most deprived)', 'SandwellLSOA_Income Decile (where 1 is most deprived 10% of LSOAs)': 'SandwellLSOA_Income Decile (where 1 is most deprived 10% of LSOAs)', 'SandwellLSOA_Employment Rank (where 1 is most deprived)': 'SandwellLSOA_Employment Rank (where 1 is most deprived)', 'SandwellLSOA_Employment Decile (where 1 is most deprived 10% of LSOAs)': 'SandwellLSOA_Employment Decile (where 1 is most deprived 10% of LSOAs)', 'SandwellLSOA_Education, Skills and Training Rank (where 1 is most deprived)': 'SandwellLSOA_Education, Skills and Training Rank (where 1 is most deprived)', 'SandwellLSOA_Education, Skills and Training Decile (where 1 is most deprived 10% of LSOAs)': 'SandwellLSOA_Education, Skills and Training Decile (where 1 is most deprived 10% of LSOAs)', 'SandwellLSOA_Health Deprivation and Disability Rank (where 1 is most deprived)': 'SandwellLSOA_Health Deprivation and Disability Rank (where 1 is most deprived)', 'SandwellLSOA_Health Deprivation and Disability Decile (where 1 is most deprived 10% of LSOAs)': 'SandwellLSOA_Health Deprivation and Disability Decile (where 1 is most deprived 10% of LSOAs)', 'SandwellLSOA_Crime Rank (where 1 is most deprived)': 'SandwellLSOA_Crime Rank (where 1 is most deprived)', 'SandwellLSOA_Crime Decile (where 1 is most deprived 10% of LSOAs)': 'SandwellLSOA_Crime Decile (where 1 is most deprived 10% of LSOAs)', 'SandwellLSOA_Barriers to Housing and Services Rank (where 1 is most deprived)': 'SandwellLSOA_Barriers to Housing and Services Rank (where 1 is most deprived)', 'SandwellLSOA_Barriers to Housing and Services Decile (where 1 is most deprived 10% of LSOAs)': 'SandwellLSOA_Barriers to Housing and Services Decile (where 1 is most deprived 10% of LSOAs)', 'SandwellLSOA_Living Environment Rank (where 1 is most deprived)': 'SandwellLSOA_Living Environment Rank (where 1 is most deprived)', 'SandwellLSOA_Living Environment Decile (where 1 is most deprived 10% of LSOAs)': 'SandwellLSOA_Living Environment Decile (where 1 is most deprived 10% of LSOAs)', });
lyr_SmethwickMetro_2.set('fieldAliases', {'id': 'id', 'la': 'la', 'station_na': 'station_na', 'projectnam': 'projectnam', 'xcoord': 'xcoord', 'ycoord': 'ycoord', 'towards_wo': 'towards_wo', 'towards_li': 'towards_li', 'naptan': 'naptan', 'ESRI_OID': 'ESRI_OID', });
lyr_RailSmethwickTown_3.set('fieldAliases', {'id': 'id', 'feature_co': 'feature_co', 'identifier': 'identifier', 'name': 'name', });
lyr_BUSLSOA28ASmethwick_4.set('fieldAliases', {'indicator': 'indicator', 'suburblang': 'suburblang', 'notes': 'notes', 'mod': 'mod', 'gridtype': 'gridtype', 'moddatetim': 'moddatetim', 'naptancode': 'naptancode', 'gparentln': 'gparentln', 'latitude': 'latitude', 'creatdatet': 'creatdatet', 'revnum': 'revnum', 'northing': 'northing', 'shortcn': 'shortcn', 'lname': 'lname', 'noteslang': 'noteslang', 'atcocode': 'atcocode', 'commonname': 'commonname', 'lcentre': 'lcentre', 'street': 'street', 'adminareac': 'adminareac', 'indlang': 'indlang', 'landmark': 'landmark', 'platecode': 'platecode', 'longitude': 'longitude', 'cleardwnco': 'cleardwnco', 'easting': 'easting', 'timingstat': 'timingstat', 'town': 'town', 'nptglcode': 'nptglcode', 'bearing': 'bearing', 'parentln': 'parentln', 'cnlang': 'cnlang', 'dfltwaitti': 'dfltwaitti', 'crossing': 'crossing', 'townlang': 'townlang', 'shcnlang': 'shcnlang', 'busstoptyp': 'busstoptyp', 'stoptype': 'stoptype', 'suburb': 'suburb', 'streetlang': 'streetlang', 'crosslang': 'crosslang', 'lmarklang': 'lmarklang', 'objectid': 'objectid', 'status': 'status', });
lyr_SmethwickBdgs_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'amenity': 'amenity', 'brand': 'brand', 'wheelchair': 'wheelchair', });
lyr_SmethwickTown_6.set('fieldAliases', {'ID': 'ID', 'Town': 'Town', });
lyr_LSOA28AFlyTipping2025_7.set('fieldAliases', {'ProcessName': 'ProcessName', 'lng': 'lng', 'lat': 'lat', 'Sum of Count': 'Sum of Count', });
lyr_LSOA28ADogMess2025_8.set('fieldAliases', {'ProcessName': 'ProcessName', 'lng': 'lng', 'lat': 'lat', 'Sum of Count': 'Sum of Count', });
lyr_SmethwickRoads_9.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', });
lyr_ResidentialOwnershipLSOA28ASmethwick_10.set('fieldAliases', {'UPRN': 'UPRN', 'ADDRESS': 'ADDRESS', 'STREET_NAME': 'STREET_NAME', 'TOWN_NAME': 'TOWN_NAME', 'POSTCODE': 'POSTCODE', 'BLPU_CLASS': 'BLPU_CLASS', 'MAP_EAST': 'MAP_EAST', 'MAP_NORTH': 'MAP_NORTH', 'OWNERSHIP_uprn': 'OWNERSHIP_uprn', 'OWNERSHIP_Place-Type': 'OWNERSHIP_Place-Type', 'OWNERSHIP_Ward-Code': 'OWNERSHIP_Ward-Code', 'OWNERSHIP_Ward-Name': 'OWNERSHIP_Ward-Name', 'OWNERSHIP_ConstructionTypeName': 'OWNERSHIP_ConstructionTypeName', 'OWNERSHIP_MRA': 'OWNERSHIP_MRA', });
lyr_BoundayLinesLSOA28A_11.set('fieldAliases', {'Legend': 'Legend', 'RuleNumber': 'RuleNumber', 'FID': 'FID', 'TOID': 'TOID', 'Version': 'Version', 'VersionDat': 'VersionDat', 'Theme': 'Theme', 'Descriptiv': 'Descriptiv', 'Descript_1': 'Descript_1', 'Make': 'Make', 'PhysicalPr': 'PhysicalPr', 'FeatureCod': 'FeatureCod', 'PhysicalLe': 'PhysicalLe', 'AccuracyOf': 'AccuracyOf', 'NonBoundin': 'NonBoundin', 'LatestChan': 'LatestChan', 'LatestReas': 'LatestReas', 'ProcessDat': 'ProcessDat', 'ChunkOrigi': 'ChunkOrigi', });
lyr_LSOA28AFlyPostingGraffitti_12.set('fieldAliases', {'ProcessName': 'ProcessName', 'lng': 'lng', 'lat': 'lat', 'Sum of Count': 'Sum of Count', });
lyr_LSOA28ADangerousLitter_13.set('fieldAliases', {'ProcessName': 'ProcessName', 'lng': 'lng', 'lat': 'lat', 'Sum of Count': 'Sum of Count', });
lyr_SmethwickCanals_0.set('fieldImages', {'OBJECTID': 'Range', 'SAP_NAME': 'TextEdit', 'SAP_PLANT_': 'TextEdit', 'SAP_PLAN_1': 'TextEdit', 'SAP_KM_NAM': 'TextEdit', 'SAP_CANAL_': 'TextEdit', 'SAP_FUNC_L': 'TextEdit', 'FL_DESC': 'TextEdit', 'Shape__Len': 'TextEdit', 'GlobalID': 'TextEdit', });
lyr_LSOA28ASmethwick_1.set('fieldImages', {'fid': 'Range', 'LSOA21CD': 'TextEdit', 'LSOA21NM': 'TextEdit', 'LSOA21NMW': 'TextEdit', 'BNG_E': 'Range', 'BNG_N': 'Range', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'GlobalID': 'TextEdit', 'SandwellLS': 'TextEdit', 'Sandwell_1': 'TextEdit', 'Sandwell_2': 'TextEdit', 'Sandwell_3': 'Range', 'Sandwell_4': 'Range', 'Sandwell_5': 'Range', 'Sandwell_6': 'Range', 'Sandwell_7': 'Range', 'Sandwell_8': 'Range', 'Sandwell_9': 'Range', 'Sandwell10': 'Range', 'Sandwell11': 'Range', 'Sandwell12': 'Range', 'Sandwell13': 'Range', 'Sandwell14': 'Range', 'Sandwell15': 'Range', 'Sandwell16': 'Range', 'Sandwell17': 'Range', 'Sandwell18': 'Range', 'Sandwell19': 'Range', 'SandwellLSOA_LSOAname 2021': 'TextEdit', 'SandwellLSOA_Local Authority District code (2024)': 'TextEdit', 'SandwellLSOA_Local Authority District name (2024)': 'TextEdit', 'SandwellLSOA_Index of Multiple Deprivation (IMD) Rank (where 1 is most deprived)': 'Range', 'SandwellLSOA_Index of Multiple Deprivation (IMD) Decile (where 1 is most deprived 10% of LSOAs)': 'Range', 'SandwellLSOA_Sandwell Rank (High is Worse)': 'Range', 'SandwellLSOA_Income Rank (where 1 is most deprived)': 'Range', 'SandwellLSOA_Income Decile (where 1 is most deprived 10% of LSOAs)': 'Range', 'SandwellLSOA_Employment Rank (where 1 is most deprived)': 'Range', 'SandwellLSOA_Employment Decile (where 1 is most deprived 10% of LSOAs)': 'Range', 'SandwellLSOA_Education, Skills and Training Rank (where 1 is most deprived)': 'Range', 'SandwellLSOA_Education, Skills and Training Decile (where 1 is most deprived 10% of LSOAs)': 'Range', 'SandwellLSOA_Health Deprivation and Disability Rank (where 1 is most deprived)': 'Range', 'SandwellLSOA_Health Deprivation and Disability Decile (where 1 is most deprived 10% of LSOAs)': 'Range', 'SandwellLSOA_Crime Rank (where 1 is most deprived)': 'Range', 'SandwellLSOA_Crime Decile (where 1 is most deprived 10% of LSOAs)': 'Range', 'SandwellLSOA_Barriers to Housing and Services Rank (where 1 is most deprived)': 'Range', 'SandwellLSOA_Barriers to Housing and Services Decile (where 1 is most deprived 10% of LSOAs)': 'Range', 'SandwellLSOA_Living Environment Rank (where 1 is most deprived)': 'Range', 'SandwellLSOA_Living Environment Decile (where 1 is most deprived 10% of LSOAs)': 'Range', });
lyr_SmethwickMetro_2.set('fieldImages', {'id': 'Range', 'la': 'TextEdit', 'station_na': 'TextEdit', 'projectnam': 'TextEdit', 'xcoord': 'TextEdit', 'ycoord': 'TextEdit', 'towards_wo': 'Range', 'towards_li': 'Range', 'naptan': 'TextEdit', 'ESRI_OID': 'Range', });
lyr_RailSmethwickTown_3.set('fieldImages', {'id': 'Range', 'feature_co': 'Range', 'identifier': 'TextEdit', 'name': 'TextEdit', });
lyr_BUSLSOA28ASmethwick_4.set('fieldImages', {'indicator': 'TextEdit', 'suburblang': 'TextEdit', 'notes': 'TextEdit', 'mod': 'TextEdit', 'gridtype': 'TextEdit', 'moddatetim': 'DateTime', 'naptancode': 'TextEdit', 'gparentln': 'TextEdit', 'latitude': 'TextEdit', 'creatdatet': 'DateTime', 'revnum': 'TextEdit', 'northing': 'TextEdit', 'shortcn': 'TextEdit', 'lname': 'TextEdit', 'noteslang': 'TextEdit', 'atcocode': 'TextEdit', 'commonname': 'TextEdit', 'lcentre': 'TextEdit', 'street': 'TextEdit', 'adminareac': 'TextEdit', 'indlang': 'TextEdit', 'landmark': 'TextEdit', 'platecode': 'TextEdit', 'longitude': 'TextEdit', 'cleardwnco': 'TextEdit', 'easting': 'TextEdit', 'timingstat': 'TextEdit', 'town': 'TextEdit', 'nptglcode': 'TextEdit', 'bearing': 'TextEdit', 'parentln': 'TextEdit', 'cnlang': 'TextEdit', 'dfltwaitti': 'TextEdit', 'crossing': 'TextEdit', 'townlang': 'TextEdit', 'shcnlang': 'TextEdit', 'busstoptyp': 'TextEdit', 'stoptype': 'TextEdit', 'suburb': 'TextEdit', 'streetlang': 'TextEdit', 'crosslang': 'TextEdit', 'lmarklang': 'TextEdit', 'objectid': 'Range', 'status': 'TextEdit', });
lyr_SmethwickBdgs_5.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', 'amenity': 'TextEdit', 'brand': 'TextEdit', 'wheelchair': 'TextEdit', });
lyr_SmethwickTown_6.set('fieldImages', {'ID': 'TextEdit', 'Town': 'TextEdit', });
lyr_LSOA28AFlyTipping2025_7.set('fieldImages', {'ProcessName': 'TextEdit', 'lng': 'TextEdit', 'lat': 'TextEdit', 'Sum of Count': 'TextEdit', });
lyr_LSOA28ADogMess2025_8.set('fieldImages', {'ProcessName': 'TextEdit', 'lng': 'TextEdit', 'lat': 'TextEdit', 'Sum of Count': 'TextEdit', });
lyr_SmethwickRoads_9.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', });
lyr_ResidentialOwnershipLSOA28ASmethwick_10.set('fieldImages', {'UPRN': 'TextEdit', 'ADDRESS': 'TextEdit', 'STREET_NAME': 'TextEdit', 'TOWN_NAME': 'TextEdit', 'POSTCODE': 'TextEdit', 'BLPU_CLASS': 'TextEdit', 'MAP_EAST': 'TextEdit', 'MAP_NORTH': 'TextEdit', 'OWNERSHIP_uprn': 'TextEdit', 'OWNERSHIP_Place-Type': 'TextEdit', 'OWNERSHIP_Ward-Code': 'TextEdit', 'OWNERSHIP_Ward-Name': 'TextEdit', 'OWNERSHIP_ConstructionTypeName': 'TextEdit', 'OWNERSHIP_MRA': 'TextEdit', });
lyr_BoundayLinesLSOA28A_11.set('fieldImages', {'Legend': 'TextEdit', 'RuleNumber': 'TextEdit', 'FID': 'TextEdit', 'TOID': 'TextEdit', 'Version': 'TextEdit', 'VersionDat': 'DateTime', 'Theme': 'TextEdit', 'Descriptiv': 'TextEdit', 'Descript_1': 'TextEdit', 'Make': 'TextEdit', 'PhysicalPr': 'TextEdit', 'FeatureCod': 'TextEdit', 'PhysicalLe': 'TextEdit', 'AccuracyOf': 'TextEdit', 'NonBoundin': 'TextEdit', 'LatestChan': 'DateTime', 'LatestReas': 'TextEdit', 'ProcessDat': 'DateTime', 'ChunkOrigi': 'TextEdit', });
lyr_LSOA28AFlyPostingGraffitti_12.set('fieldImages', {'ProcessName': '', 'lng': '', 'lat': '', 'Sum of Count': '', });
lyr_LSOA28ADangerousLitter_13.set('fieldImages', {'ProcessName': 'TextEdit', 'lng': 'TextEdit', 'lat': 'TextEdit', 'Sum of Count': 'TextEdit', });
lyr_SmethwickCanals_0.set('fieldLabels', {'OBJECTID': 'no label', 'SAP_NAME': 'no label', 'SAP_PLANT_': 'no label', 'SAP_PLAN_1': 'no label', 'SAP_KM_NAM': 'no label', 'SAP_CANAL_': 'no label', 'SAP_FUNC_L': 'no label', 'FL_DESC': 'no label', 'Shape__Len': 'no label', 'GlobalID': 'no label', });
lyr_LSOA28ASmethwick_1.set('fieldLabels', {'fid': 'no label', 'LSOA21CD': 'no label', 'LSOA21NM': 'no label', 'LSOA21NMW': 'no label', 'BNG_E': 'no label', 'BNG_N': 'no label', 'LAT': 'no label', 'LONG': 'no label', 'GlobalID': 'no label', 'SandwellLS': 'no label', 'Sandwell_1': 'no label', 'Sandwell_2': 'no label', 'Sandwell_3': 'no label', 'Sandwell_4': 'no label', 'Sandwell_5': 'no label', 'Sandwell_6': 'no label', 'Sandwell_7': 'no label', 'Sandwell_8': 'no label', 'Sandwell_9': 'no label', 'Sandwell10': 'no label', 'Sandwell11': 'no label', 'Sandwell12': 'no label', 'Sandwell13': 'no label', 'Sandwell14': 'no label', 'Sandwell15': 'no label', 'Sandwell16': 'no label', 'Sandwell17': 'no label', 'Sandwell18': 'no label', 'Sandwell19': 'no label', 'SandwellLSOA_LSOAname 2021': 'no label', 'SandwellLSOA_Local Authority District code (2024)': 'no label', 'SandwellLSOA_Local Authority District name (2024)': 'no label', 'SandwellLSOA_Index of Multiple Deprivation (IMD) Rank (where 1 is most deprived)': 'no label', 'SandwellLSOA_Index of Multiple Deprivation (IMD) Decile (where 1 is most deprived 10% of LSOAs)': 'no label', 'SandwellLSOA_Sandwell Rank (High is Worse)': 'no label', 'SandwellLSOA_Income Rank (where 1 is most deprived)': 'no label', 'SandwellLSOA_Income Decile (where 1 is most deprived 10% of LSOAs)': 'no label', 'SandwellLSOA_Employment Rank (where 1 is most deprived)': 'no label', 'SandwellLSOA_Employment Decile (where 1 is most deprived 10% of LSOAs)': 'no label', 'SandwellLSOA_Education, Skills and Training Rank (where 1 is most deprived)': 'no label', 'SandwellLSOA_Education, Skills and Training Decile (where 1 is most deprived 10% of LSOAs)': 'no label', 'SandwellLSOA_Health Deprivation and Disability Rank (where 1 is most deprived)': 'no label', 'SandwellLSOA_Health Deprivation and Disability Decile (where 1 is most deprived 10% of LSOAs)': 'no label', 'SandwellLSOA_Crime Rank (where 1 is most deprived)': 'no label', 'SandwellLSOA_Crime Decile (where 1 is most deprived 10% of LSOAs)': 'no label', 'SandwellLSOA_Barriers to Housing and Services Rank (where 1 is most deprived)': 'no label', 'SandwellLSOA_Barriers to Housing and Services Decile (where 1 is most deprived 10% of LSOAs)': 'no label', 'SandwellLSOA_Living Environment Rank (where 1 is most deprived)': 'no label', 'SandwellLSOA_Living Environment Decile (where 1 is most deprived 10% of LSOAs)': 'no label', });
lyr_SmethwickMetro_2.set('fieldLabels', {'id': 'no label', 'la': 'no label', 'station_na': 'no label', 'projectnam': 'no label', 'xcoord': 'no label', 'ycoord': 'no label', 'towards_wo': 'no label', 'towards_li': 'no label', 'naptan': 'no label', 'ESRI_OID': 'no label', });
lyr_RailSmethwickTown_3.set('fieldLabels', {'id': 'no label', 'feature_co': 'no label', 'identifier': 'no label', 'name': 'no label', });
lyr_BUSLSOA28ASmethwick_4.set('fieldLabels', {'indicator': 'no label', 'suburblang': 'no label', 'notes': 'no label', 'mod': 'no label', 'gridtype': 'no label', 'moddatetim': 'no label', 'naptancode': 'no label', 'gparentln': 'no label', 'latitude': 'no label', 'creatdatet': 'no label', 'revnum': 'no label', 'northing': 'no label', 'shortcn': 'no label', 'lname': 'no label', 'noteslang': 'no label', 'atcocode': 'no label', 'commonname': 'no label', 'lcentre': 'no label', 'street': 'no label', 'adminareac': 'no label', 'indlang': 'no label', 'landmark': 'no label', 'platecode': 'no label', 'longitude': 'no label', 'cleardwnco': 'no label', 'easting': 'no label', 'timingstat': 'no label', 'town': 'no label', 'nptglcode': 'no label', 'bearing': 'no label', 'parentln': 'no label', 'cnlang': 'no label', 'dfltwaitti': 'no label', 'crossing': 'no label', 'townlang': 'no label', 'shcnlang': 'no label', 'busstoptyp': 'no label', 'stoptype': 'no label', 'suburb': 'no label', 'streetlang': 'no label', 'crosslang': 'no label', 'lmarklang': 'no label', 'objectid': 'no label', 'status': 'no label', });
lyr_SmethwickBdgs_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'amenity': 'no label', 'brand': 'no label', 'wheelchair': 'no label', });
lyr_SmethwickTown_6.set('fieldLabels', {'ID': 'no label', 'Town': 'no label', });
lyr_LSOA28AFlyTipping2025_7.set('fieldLabels', {'ProcessName': 'no label', 'lng': 'no label', 'lat': 'no label', 'Sum of Count': 'no label', });
lyr_LSOA28ADogMess2025_8.set('fieldLabels', {'ProcessName': 'no label', 'lng': 'no label', 'lat': 'no label', 'Sum of Count': 'no label', });
lyr_SmethwickRoads_9.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'name': 'no label', 'surface': 'no label', 'maxspeed': 'no label', 'ref': 'no label', });
lyr_ResidentialOwnershipLSOA28ASmethwick_10.set('fieldLabels', {'UPRN': 'no label', 'ADDRESS': 'no label', 'STREET_NAME': 'no label', 'TOWN_NAME': 'no label', 'POSTCODE': 'no label', 'BLPU_CLASS': 'no label', 'MAP_EAST': 'no label', 'MAP_NORTH': 'no label', 'OWNERSHIP_uprn': 'no label', 'OWNERSHIP_Place-Type': 'no label', 'OWNERSHIP_Ward-Code': 'no label', 'OWNERSHIP_Ward-Name': 'no label', 'OWNERSHIP_ConstructionTypeName': 'no label', 'OWNERSHIP_MRA': 'no label', });
lyr_BoundayLinesLSOA28A_11.set('fieldLabels', {'Legend': 'no label', 'RuleNumber': 'no label', 'FID': 'no label', 'TOID': 'no label', 'Version': 'no label', 'VersionDat': 'no label', 'Theme': 'no label', 'Descriptiv': 'no label', 'Descript_1': 'no label', 'Make': 'no label', 'PhysicalPr': 'no label', 'FeatureCod': 'no label', 'PhysicalLe': 'no label', 'AccuracyOf': 'no label', 'NonBoundin': 'no label', 'LatestChan': 'no label', 'LatestReas': 'no label', 'ProcessDat': 'no label', 'ChunkOrigi': 'no label', });
lyr_LSOA28AFlyPostingGraffitti_12.set('fieldLabels', {'ProcessName': 'no label', 'lng': 'no label', 'lat': 'no label', 'Sum of Count': 'no label', });
lyr_LSOA28ADangerousLitter_13.set('fieldLabels', {'ProcessName': 'no label', 'lng': 'no label', 'lat': 'no label', 'Sum of Count': 'no label', });
lyr_LSOA28ADangerousLitter_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});